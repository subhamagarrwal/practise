import { INestApplication, Injectable } from "@nestjs/common";

import { z } from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { PortfolioService } from "./portfolio.service";
import { PortfolioCreateInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/PortfolioCreateInput.schema";
import { PortfolioWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/PortfolioWhereUniqueInput.schema";
import { PortfolioSelectObjectSchema } from "apps/backend/prisma/manual-zod-schemas/PortfolioSelect.schema";
import { PortfolioUpdateInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/PortfolioUpdateInput.schema";

@Injectable()
export class PortfolioRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly PService: PortfolioService,
    ) {}

    portfolioRouter = this.trpc.router({
        create: this.trpc.procedure
            .input(PortfolioCreateInputObjectSchema)
            .mutation(async ({ input, ctx }) => {
                return this.PService.createPortfolio(input);
            }),
        getMany: this.trpc.procedure
            .input(z.object({ page: z.number(), limit: z.number() }))
            .query(async ({ input, ctx }) => {
                return this.PService.findManyPortfolio(input.page, input.limit);
            }),
        getOne: this.trpc.procedure
            .input(z.object({ where: PortfolioWhereUniqueInputObjectSchema, select: PortfolioSelectObjectSchema.optional() }))
            .query(async ({ input, ctx }) => {
                return this.PService.findUniquePortfolio(input.where, input.select);
            }),
        update: this.trpc.procedure
            .input(z.object({ where: PortfolioWhereUniqueInputObjectSchema, data: PortfolioUpdateInputObjectSchema, select: PortfolioSelectObjectSchema.optional() }))
            .mutation(async ({ input, ctx }) => {
                return this.PService.updatePortfolio(input.where, input.data, input.select);
            }),
        delete: this.trpc.procedure
            .input(PortfolioWhereUniqueInputObjectSchema)
            .mutation(async ({ input, ctx }) => {
                return this.PService.deletePortfolio(input);
            })
    });

    async applyMiddleware(app: INestApplication) {
        app.use('/portfolio', trpcExpress.createExpressMiddleware({ router: this.portfolioRouter }));
    }
}

export type PortfolioRouterType = PortfolioRouter['portfolioRouter'];