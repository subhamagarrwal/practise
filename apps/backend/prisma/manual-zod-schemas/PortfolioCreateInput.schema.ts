import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { Skills } from './enums';
const Schema: z.ZodType<Prisma.PortfolioCreateInput> = z
  .object({
    portfolioID: z.string().uuid().optional(), 
    createdAt: z.coerce.date().optional(), 
    updatedAt: z.coerce.date().optional(), 
    usefulLinks: z.array(z.nativeEnum(Skills)), 
    yearsOfExperience: z.number().int().min(0).optional(), 
  })
  .strict();

export const PortfolioCreateInputObjectSchema = Schema;