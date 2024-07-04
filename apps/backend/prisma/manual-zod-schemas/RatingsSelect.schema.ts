import { z } from 'zod';
import type { Prisma } from '@prisma/client';

// import { ClientFindManySchema } from '../findManyClient.schema';
// import { FreelancerFindManySchema } from '../findManyFreelancer.schema';

const Schema: z.ZodType<Prisma.RatingsSelect> = z
  .object({
    reviewID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    // client: z
    //   .union([z.boolean(), z.lazy(() => ClientFindManySchema)])
    //   .optional(),
    clientClientID: z.boolean().optional(),
    // freelancer: z
    //   .union([z.boolean(), z.lazy(() => FreelancerFindManySchema)])
    //   .optional(),
    freelancerFreelancerID: z.boolean().optional(),
    Rating: z.boolean().optional(),
    feedBack: z.boolean().optional(),
    likes: z.boolean().optional(),
    clientSatisfactionScore: z.boolean().optional(),
  })
  .strict();

export const RatingsSelectObjectSchema = Schema;