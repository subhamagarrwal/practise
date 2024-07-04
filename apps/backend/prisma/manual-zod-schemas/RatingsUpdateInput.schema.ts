import { z } from 'zod';
// import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
// import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
// import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
// import { RatingsUpdateManyWithoutClientNestedInputObjectSchema } from './RatingsUpdateManyWithoutClientNestedInput.schema';
// import { RatingsUpdateManyWithoutFreelancerNestedInputObjectSchema } from './RatingsUpdateManyWithoutFreelancerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateInput> = z
  .object({
    reviewID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    // client: z
    //   .lazy(() => ClientUpdateOneRequiredWithoutRatingsNestedInputObjectSchema)
    //   .optional(),
    clientClientID: z.string().optional(),
    // freelancer: z
    //   .lazy(() => FreelancerUpdateOneRequiredWithoutRatingsNestedInputObjectSchema)
    //   .optional(),
    freelancerFreelancerID: z.string().optional(),
    Rating: z.number().optional(),
    feedBack: z.string().optional(),
    likes: z.number().optional(),
    clientSatisfactionScore: z.number().optional(),
  })
  .strict();

export const RatingsUpdateInputObjectSchema = Schema;