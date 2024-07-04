import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { TrpcService } from '@server/trpc/trpc.service';
import { ChatService } from './chat.service';
import { ChatRouter } from './chat.router';
import { ChatGateway } from './chat.gateway';
import { PrismaService } from '@server/prisma/prisma.service';

@Module({
  imports: [
    TrpcModule, 
    PrismaModule],
  providers: [ChatRouter, ChatService, TrpcService, ChatGateway],
  exports: [ChatRouter]
})
export class ChatModule {}