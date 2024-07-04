import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { FreelancerService } from './freelancer.service';
import { FreelancerRouter } from './freelancer.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [
    TrpcModule, 
    PrismaModule],
  providers: [FreelancerService, FreelancerRouter, TrpcService],
})
export class FreelancerModule {}