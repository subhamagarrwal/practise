import { INestApplication, Injectable } from "@nestjs/common";

import {z} from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { ChatService } from "./chat.service";
import { FreelancerWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerWhereUniqueInput.schema";
import { ClientWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/ClientWhereUniqueInput.schema";
import { ConversationWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/ConversationWhereUniqueInput.schema";
import { MessageWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/MessageWhereUniqueInput.schema";
import { ConversationCreateInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/ConversationCreateInput.schema";

@Injectable()
export class ChatRouter {
    constructor(
      private readonly trpc: TrpcService,
      private readonly service: ChatService,
    ) {}

    chatRouter = this.trpc.router({

        freelancerConversations: this.trpc.procedure
                                .input(FreelancerWhereUniqueInputObjectSchema)
                                .query( async ({input, ctx}) => {
                                    return this.service.getFreelancerConversations(input);
                                }),

        clientConversations: this.trpc.procedure
                            .input(ClientWhereUniqueInputObjectSchema)
                            .query( async ({input, ctx}) => {
                                return this.service.getClientConversations(input);
                            }),

        fetchMessages: this.trpc.procedure
                        .input(z.object({ where: ConversationWhereUniqueInputObjectSchema, page: z.number().optional(), limit: z.number().optional()}))
                        .query( async ({input, ctx}) => {
                            let page = input.page ?? 1
                            let limit = input.limit ?? 10

                            return this.service.fetchConversationHistory(input.where, page, limit);
                        }),

        newConversation: this.trpc.procedure
                        .input(ConversationCreateInputObjectSchema)
                        .mutation( async ({input, ctx}) => {
                            return this.service.createNewConversation(input)
                        }),

        deleteMessage: this.trpc.procedure
                        .input(MessageWhereUniqueInputObjectSchema)
                        .mutation( async ({input, ctx}) => {
                            return this.service.deleteMessage(input);
                        }),

        deleteConversation: this.trpc.procedure
                        .input(ConversationWhereUniqueInputObjectSchema)
                        .mutation( async ({input, ctx}) => {
                            return this.service.deleteConversation(input);
                        })
      
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/chat', trpcExpress.createExpressMiddleware({router: this.chatRouter}))
    }
}

export type ChatRouterType = ChatRouter['chatRouter'];
