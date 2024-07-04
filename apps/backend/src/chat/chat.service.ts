import { Injectable } from "@nestjs/common";
import { Prisma, Message, Conversation } from "@prisma/client";
import { PrismaService } from "@server/prisma/prisma.service";
import { CreateMessageInputDto } from "./dto/createMessageInput.dto";
import { create } from "domain";

@Injectable()
export class ChatService{

    constructor(private prisma: PrismaService) {}

    async getFreelancerConversations (where: Prisma.FreelancerWhereUniqueInput) {
       
        return (await this.prisma.conversation.findMany({
            where: {
              freelancerFreelancerID: where.freelancerID,
            },
            include: {
              client: true, 
            },
            orderBy: {
                updatedAt: 'desc',
            },
          }));
    
    };

    async getClientConversations (where: Prisma.ClientWhereUniqueInput) {

        return (await this.prisma.conversation.findMany({
            where: {
              clientClientID: where.clientID,
            },
            include: {
              freelancer: true, 
            },
            orderBy: {
                updatedAt: 'desc', 
            },
          })
        );
    };

    async fetchConversationHistory (where: Prisma.ConversationWhereUniqueInput, page: number = 1, limit: number = 10) {
        const take = limit || 10;
        const skip = (page - 1 ) * limit

        return ( await this.prisma.message.findMany({
            where: {
                conversationID: where.conversationID
            },
            orderBy: {
                createdAt: 'desc',
            },
            skip,
            take
        })
        )
    }

    // -- Conversation CRUDs -- 

    async createNewConversation (input: Prisma.ConversationCreateInput) {
        return (await this.prisma.conversation.create({
            data: input,
          })) as Conversation;
    }

    async findConversation (where: Prisma.ConversationWhereUniqueInput, select?: Prisma.ConversationSelect) {
        return (await this.prisma.conversation.findUniqueOrThrow({
            where, 
            select
        })) as Conversation
    }

    async deleteConversation (where: Prisma.ConversationWhereUniqueInput){
        return (await this.prisma.conversation.delete({
            where
        })) as Conversation;
    }

    // -- Message CRUDs -- 
    async createNewMessage (input: CreateMessageInputDto) {
        
        let senderData = (input.senderType === 'client')? 
                        ({
                            senderClient: {
                                connect: { clientID: input.senderClientID }
                            }
                        }):
                        ({
                            senderFreelancer: {
                                connect: { freelancerID: input.senderFreelancerID}
                            }
                        })
                                    

        let data = {
            ...senderData,
            content: input.content,
            conversation: {
                connect: { conversationID: input.conversationID}
            }

        }
        
        const createdMessage = (await this.prisma.message.create({
            data,
        })) as Message;
        
        // update conversation to show latest message creation date, can be used to sort conversations later
        await this.prisma.conversation.update({
            where: { conversationID: createdMessage.conversationID},
            data: {
                updatedAt: new Date()
            }
        })

        return createdMessage;
    }

    async findMessage (where: Prisma.MessageWhereUniqueInput, select?: Prisma.MessageSelect) {
        return (await this.prisma.message.findUniqueOrThrow({
            where, 
            select
        })) as Message
    }

    async deleteMessage (where: Prisma.MessageWhereUniqueInput){
        return (await this.prisma.message.delete({
            where
        })) as Message;
    }

    

    
}