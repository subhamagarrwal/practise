import { z } from 'zod';
// import { RatingsFindManySchema } from '../findManyRatings.schema';
// import { ProjectApplicationsFindManySchema } from '../findManyProjectApplications.schema';
// import { ProjectSelectionsFindManySchema } from '../findManyProjectSelections.schema';
// import { FreelancerCountOutputTypeArgsObjectSchema } from './FreelancerCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerSelect> = z
  .object({
    freelancerID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    userName: z.boolean().optional(),
    email: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    bio: z.boolean().optional(),
    basedIn: z.boolean().optional(),
    totalEarnings: z.boolean().optional(),
    avgRating: z.boolean().optional(),
    workPreferences: z.boolean().optional(),
    // Ratings: z
    //   .union([z.boolean(), z.lazy(() => RatingsFindManySchema)])
    //   .optional(),
    // Applications: z
    //   .union([z.boolean(), z.lazy(() => ProjectApplicationsFindManySchema)])
    //   .optional(),
    // ProjectSelection: z
    //   .union([z.boolean(), z.lazy(() => ProjectSelectionsFindManySchema)])
    //   .optional(),
    // _count: z
    //   .union([
    //     z.boolean(),
    //     z.lazy(() => FreelancerCountOutputTypeArgsObjectSchema),
    //   ])
    //   .optional(),
  })
  .strict();

export const FreelancerSelectObjectSchema = Schema;