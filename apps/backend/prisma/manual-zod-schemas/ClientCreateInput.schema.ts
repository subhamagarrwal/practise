import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateInput> = z
  .object({
    clientID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    name: z.string(),
    userName: z.string(),
    email: z.string(),
    phoneNumber: z.number(),
    basedIn: z.string(),
    companyName: z.string().optional(),
    noOfOrders: z.number(),
    
  })
  .strict();

export const ClientCreateInputObjectSchema = Schema;