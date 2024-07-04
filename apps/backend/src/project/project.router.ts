import { Injectable, INestApplication } from "@nestjs/common";
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from "@server/trpc/trpc.service";
import { ProjectService } from "./project.service";
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly projectService: ProjectService,
    ) {}

    projectRouter = this.trpc.router({
        createProject: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const dto = plainToClass(CreateProjectDto, input);
                await validateOrReject(dto);
                return this.projectService.create(dto);
            }),

        getProject: this.trpc.procedure
            .input(z.object({ projectID: z.string() }))
            .query(async ({ input }) => {
                return this.projectService.findOne(input.projectID);
            }),

        updateProject: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const { projectID, ...rest } = input;
                const dto = plainToClass(UpdateProjectDto, rest);
                await validateOrReject(dto);
                return this.projectService.update(projectID, dto);
            }),

        deleteProject: this.trpc.procedure
            .input(z.object({ projectID: z.string() }))
            .mutation(async ({ input }) => {
                await this.projectService.delete(input.projectID);
                return { success: true };
            }),

        listProjects: this.trpc.procedure.query(async () => {
            return this.projectService.findAll();
        }),
    });

    async applyMiddleware(app: INestApplication) {
        app.use('/project', trpcExpress.createExpressMiddleware({ router: this.projectRouter }));
    }
}

export type ProjectRouterType = ProjectRouter['projectRouter'];
