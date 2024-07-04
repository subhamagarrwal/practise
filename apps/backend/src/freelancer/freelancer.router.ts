import { INestApplication, Injectable } from "@nestjs/common";

import {z} from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { FreelancerService } from "./freelancer.service";

import { FreelancerCreateInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/FreelancerCreateInput.schema"
import { FreelancerWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerWhereUniqueInput.schema";
import { FreelancerSelectObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerSelect.schema"
import { FreelancerUpdateInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerUpdateInput.schema"

@Injectable()
export class FreelancerRouter {
    constructor(
      private readonly trpc: TrpcService,
      private readonly fService: FreelancerService,
    ) {}

    freelancerRouter = this.trpc.router({
      create: this.trpc.procedure
                        .input(FreelancerCreateInputObjectSchema)
                        .mutation(async ({ input, ctx }) => {
                          return this.fService.createFreelancer(input);
                        }),
      getMany: this.trpc.procedure
                      .input(z.object({page: z.number().optional(), limit: z.number().optional()}))
                      .query(async ({input, ctx}) => {
                        let page = input.page ?? 1
                        let limit = input.limit ?? 10
                        return this.fService.findManyFreelancers(page, limit);
                      }),
      getOne: this.trpc.procedure
                        .input(z.object({where: FreelancerWhereUniqueInputObjectSchema, select: FreelancerSelectObjectSchema.optional()}))
                        .query(async ({input, ctx}) => {
                          return this.fService.findUniqueFreelancer(input.where, input.select);
                        }),
      update: this.trpc.procedure
                        .input(z.object({where: FreelancerWhereUniqueInputObjectSchema, data: FreelancerUpdateInputObjectSchema, select: FreelancerSelectObjectSchema.optional()}))
                        .mutation(async ({input, ctx}) => {
                          return this.fService.updateFreelancer(input.where, input.data, input.select);
                        }),

      delete: this.trpc.procedure
                        .input(FreelancerWhereUniqueInputObjectSchema)
                        .mutation(async ({input, ctx}) => {
                          return this.fService.deleteFreelancer(input);
                        })
      
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/freelancer', trpcExpress.createExpressMiddleware({router: this.freelancerRouter}))
    }
}

export type FreelancerRouterType = FreelancerRouter['freelancerRouter'];
