import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConversationWhereUniqueInput> = z
  .object({
    conversationID: z.string(),
  })
  .strict();

export const ConversationWhereUniqueInputObjectSchema = Schema;