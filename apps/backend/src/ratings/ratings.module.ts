import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { TrpcService } from '@server/trpc/trpc.service';
import { RatingsRouter } from './ratings.router';
import { PrismaModule } from '@server/prisma/prisma.module';
import { TrpcModule } from '@server/trpc/trpc.module';

@Module({
  imports: [TrpcModule, PrismaModule],

  providers: [RatingsService, RatingsRouter, TrpcService],
})
export class RatingsModule {}