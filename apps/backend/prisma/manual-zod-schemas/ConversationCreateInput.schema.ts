import { z } from 'zod';
import type { Prisma } from '@prisma/client';


import {ClientWhereUniqueInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/ClientWhereUniqueInput.schema";
import {FreelancerWhereUniqueInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/FreelancerWhereUniqueInput.schema"

    
const Schema: z.ZodType<Prisma.ConversationCreateInput> = z
    .object({
        conversationID: z.string().uuid().optional(), // Optional because it defaults to a UUID
        createdAt: z.date().optional(), // Optional because it defaults to the current date
        updatedAt: z.date().optional(), // Optional because it updates automatically
    
        clientClientID: z.string().uuid(),
        freelancerFreelancerID: z.string().uuid(),

        client: z.object({
            connect: ClientWhereUniqueInputObjectSchema
        }),

        freelancer: z.object({
            connect: FreelancerWhereUniqueInputObjectSchema
        })
            
    }).strict();


export const ConversationCreateInputObjectSchema = Schema;