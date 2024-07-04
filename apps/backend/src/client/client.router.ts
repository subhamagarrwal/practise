import { INestApplication, Injectable } from "@nestjs/common";

import {z} from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { ClientService } from "./client.service";
import {ClientCreateInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/ClientCreateInput.schema";
import {ClientWhereUniqueInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/ClientWhereUniqueInput.schema";
import{ClientSelectObjectSchema} from "apps/backend/prisma/manual-zod-schemas/ClientSelect.schema"
import { ClientUpdateInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/ClientUpdateInput.schema"

@Injectable()
export class ClientRouter {
    constructor(
      private readonly trpc: TrpcService,
      private readonly CService: ClientService,
    ) {}

    clientRouter = this.trpc.router({
      create: this.trpc.procedure
                        .input(ClientCreateInputObjectSchema)
                        .mutation(async ({ input, ctx }) => {
                          return this.CService.createClient(input);
                        }),
      getMany: this.trpc.procedure
                      .input(z.object({page: z.number(), limit: z.number()}))
                      .query(async ({input, ctx}) => {
                        return this.CService.findManyClient(input.page, input.limit);
                      }),
      getOne: this.trpc.procedure
                        .input(z.object({where: ClientWhereUniqueInputObjectSchema, select: ClientSelectObjectSchema.optional()}))
                        .query(async ({input, ctx}) => {
                          return this.CService.findUniqueClient(input.where, input.select);
                        }),
      update: this.trpc.procedure
                        .input(z.object({where: ClientWhereUniqueInputObjectSchema, data: ClientUpdateInputObjectSchema, select: ClientSelectObjectSchema.optional()}))
                        .mutation(async ({input, ctx}) => {
                          return this.CService.updateClient(input.where, input.data, input.select);
                        }),

      delete: this.trpc.procedure
                        .input(ClientWhereUniqueInputObjectSchema)
                        .mutation(async ({input, ctx}) => {
                          return this.CService.deleteClient(input);
                        })
      
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/client', trpcExpress.createExpressMiddleware({router: this.clientRouter}))
    }
}

export type ClientRouterType = ClientRouter['clientRouter'];
