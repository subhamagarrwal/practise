import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioWhereUniqueInput> = z
  .object({
    portfolioID: z.string().uuid(),
  })
  .strict();

export const PortfolioWhereUniqueInputObjectSchema = Schema;