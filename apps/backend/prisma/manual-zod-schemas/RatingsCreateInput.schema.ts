import { z } from 'zod';
import type { Prisma } from '@prisma/client';

// import { ClientCreateNestedOneWithoutRatingsInputObjectSchema } from '../client/ClientCreateNestedOneWithoutRatingsInput.schema';
// import { FreelancerCreateNestedOneWithoutRatingsInputObjectSchema } from '../freelancer/FreelancerCreateNestedOneWithoutRatingsInput.schema';

const Schema: z.ZodType<Prisma.RatingsCreateInput> = z
  .object({
    reviewID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    // client: z
    //   .lazy(() => ClientCreateNestedOneWithoutRatingsInputObjectSchema),
    clientClientID: z.string(),
    // freelancer: z
    //   .lazy(() => FreelancerCreateNestedOneWithoutRatingsInputObjectSchema),
    freelancerFreelancerID: z.string(),
    Rating: z.number(),
    feedBack: z.string(),
    likes: z.number().optional(),
    clientSatisfactionScore: z.number().optional(),
  })
  .strict();

export const RatingsCreateInputObjectSchema = Schema;