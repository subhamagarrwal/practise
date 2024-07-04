import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { Skills } from './enums';

// Define the Skills enum in Zod
const SkillsEnum = z.nativeEnum(Skills);


const Schema: z.ZodType<Prisma.PortfolioUpdateInput> = z
  .object({
    portfolioID: z.string().uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    usefulLinks: z.array(SkillsEnum).optional(),
    yearsOfExperience: z.number().int().min(0).optional(),
  })
  .strict();

export const PortfolioUpdateInputObjectSchema = Schema; 