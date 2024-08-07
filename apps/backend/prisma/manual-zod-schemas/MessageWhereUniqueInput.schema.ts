import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageWhereUniqueInput> = z
  .object({
    messageID: z.string(),
  })
  .strict();

export const MessageWhereUniqueInputObjectSchema = Schema;