import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioSelect> = z
  .object({
    portfolioID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    usefulLinks: z.boolean().optional(),
    yearsOfExperience: z.boolean().optional(),
  })
  .strict();

export const PortfolioSelectObjectSchema = Schema;