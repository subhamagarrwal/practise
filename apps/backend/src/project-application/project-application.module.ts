import { Module } from '@nestjs/common';
import { ProjectApplicationService } from './project-application.service';
import { PrismaModule } from 'apps/backend/src/prisma/prisma.module';
import { ProjectApplicationRouter } from './project-application.router';
import { TrpcModule } from '@server/trpc/trpc.module';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [PrismaModule, TrpcModule],
  providers: [ProjectApplicationService, ProjectApplicationRouter, TrpcService],
  exports: [ProjectApplicationService, ProjectApplicationRouter], // Export if needed in other modules
})
export class ProjectApplicationModule {}


