import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { TrpcService } from '@server/trpc/trpc.service';
import { PortfolioRouter } from './potfolio.router';

@Module({
  imports: [TrpcModule, PrismaModule],
  providers: [PortfolioService,PortfolioRouter , TrpcService],
})
export class PortfolioModule {}