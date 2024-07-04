/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { TrpcRouter } from './trpc/trpc.router';
import { FreelancerRouter } from './freelancer/freelancer.router';
import { ClientRouter } from './client/client.router';
import { ProjectRouter } from './project/project.router';
import { ProjectApplicationRouter } from './project-application/project-application.router';
import { ProjectSelectionRouter } from './project-selection/project-selection.router';
import { ChatRouter } from './chat/chat.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
  const port = process.env.PORT || 4000;
  app.enableCors();

  // ADDING TRPC
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  // ADDING Freelancer
  const freelancer = app.get(FreelancerRouter);
  freelancer.applyMiddleware(app);

  // ADDING Client
  const client = app.get(ClientRouter);
  client.applyMiddleware(app);

  // ADDING Project
  const project = app.get(ProjectRouter);
  project.applyMiddleware(app);

  // ADDING ProjectApplication
  const projectApplication = app.get(ProjectApplicationRouter);
  projectApplication.applyMiddleware(app);

  // ADDING ProjectSelection
  const projectSelection = app.get(ProjectSelectionRouter);
  projectSelection.applyMiddleware(app);

  // adding chat features
  const chat = app.get(ChatRouter);
  chat.applyMiddleware(app);
  
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();

