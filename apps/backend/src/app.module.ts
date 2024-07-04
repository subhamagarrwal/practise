import { Module, NestModule, MiddlewareConsumer, INestApplication, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './auth/common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { TrpcService } from './trpc/trpc.service';
import { TrpcRouter } from './trpc/trpc.router';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
  ],
  providers: [
    TrpcService,
    TrpcRouter,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ]
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly trpcRouter: TrpcRouter) {}

  configure(consumer: MiddlewareConsumer) {
    // No need to configure consumer here for tRPC
  }

  async onModuleInit() {
    // Pass the Nest application instance to tRPC router
    const app = this as unknown as INestApplication;
    await this.trpcRouter.applyMiddleware(app);
  }
}
