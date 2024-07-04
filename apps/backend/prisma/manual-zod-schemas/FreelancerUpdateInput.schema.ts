import { z } from 'zod';
// import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
// import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
// import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
// import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
// import { RatingsUpdateManyWithoutFreelancerNestedInputObjectSchema } from './RatingsUpdateManyWithoutFreelancerNestedInput.schema';
// import { ProjectApplicationsUpdateManyWithoutApplicantNestedInputObjectSchema } from './ProjectApplicationsUpdateManyWithoutApplicantNestedInput.schema';
// import { ProjectSelectionsUpdateManyWithoutSelectedFreelancerNestedInputObjectSchema } from './ProjectSelectionsUpdateManyWithoutSelectedFreelancerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpdateInput> = z
  .object({
    freelancerID: z.string()

    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    createdAt: z.coerce.date()
    //   .union([
    //     z.coerce.date(),
        
    //   ])
      .optional(),
    updatedAt: z.coerce.date()
    //   .union([
    //     z.coerce.date(),
    //     z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    name: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    userName: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    email: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    phoneNumber: z.number()
    //   .union([
    //     z.number(),
    //     z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    bio: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    basedIn: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    totalEarnings: z.number()
    //   .union([
    //     z.number(),
    //     z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    avgRating: z.number()
    //   .union([
    //     z.number(),
    //     z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    workPreferences: z.string()
    //   .union([
    //     z.string(),
    //     z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
    //   ])
      .optional(),
    // Ratings: z
    //   .lazy(() => RatingsUpdateManyWithoutFreelancerNestedInputObjectSchema)
    //   .optional(),
    // Applications: z
    //   .lazy(
    //     () =>
    //       ProjectApplicationsUpdateManyWithoutApplicantNestedInputObjectSchema
    //   )
    //   .optional(),
    // ProjectSelection: z
    //   .lazy(
    //     () =>
    //       ProjectSelectionsUpdateManyWithoutSelectedFreelancerNestedInputObjectSchema
    //   )
    //   .optional(),
  })
  .strict();

export const FreelancerUpdateInputObjectSchema = Schema;
