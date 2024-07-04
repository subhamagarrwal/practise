import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { ClientService } from './client.service';
import { ClientRouter } from './client.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [
    TrpcModule, 
    PrismaModule],
  providers: [ClientService, ClientRouter, TrpcService],
})
export class ClientModule {}