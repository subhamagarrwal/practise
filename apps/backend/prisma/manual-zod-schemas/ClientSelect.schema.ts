import { z } from 'zod';
// import { RatingsFindManySchema } from '../findManyRatings.schema';
// import { ProjectApplicationsFindManySchema } from '../findManyProjectApplications.schema';
// import { ProjectSelectionsFindManySchema } from '../findManyProjectSelections.schema';
// import { FreelancerCountOutputTypeArgsObjectSchema } from './FreelancerCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientSelect> = z
  .object({
    clientID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    userName: z.boolean().optional(),
    email: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    basedIn: z.boolean().optional(),
    companyName: z.boolean().optional(),
    noOfOrders: z.boolean().optional(),
    
  })
  .strict();

export const ClientSelectObjectSchema = Schema;