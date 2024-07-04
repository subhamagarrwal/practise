import { Injectable, INestApplication } from "@nestjs/common";
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from "@server/trpc/trpc.service";
import { ProjectApplicationService } from "./project-application.service";
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CreateProjectApplicationDto } from './dto/create-project-application.dto';
import { UpdateProjectApplicationDto } from './dto/update-project-application.dto';

@Injectable()
export class ProjectApplicationRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly projectApplicationService: ProjectApplicationService,
    ) {}

    projectApplicationRouter = this.trpc.router({
        createProjectApplication: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const dto = plainToClass(CreateProjectApplicationDto, input);
                await validateOrReject(dto);
                return this.projectApplicationService.create(dto);
            }),

        getProjectApplication: this.trpc.procedure
            .input(z.object({ projectApplicationID: z.string() }))
            .query(async ({ input }) => {
                return this.projectApplicationService.findOne(input.projectApplicationID);
            }),

        updateProjectApplication: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const { projectApplicationID, ...rest } = input;
                const dto = plainToClass(UpdateProjectApplicationDto, rest);
                await validateOrReject(dto);
                return this.projectApplicationService.update(projectApplicationID, dto);
            }),

        deleteProjectApplication: this.trpc.procedure
            .input(z.object({ projectApplicationID: z.string() }))
            .mutation(async ({ input }) => {
                await this.projectApplicationService.delete(input.projectApplicationID);
                return { success: true };
            }),

        listProjectApplications: this.trpc.procedure.query(async () => {
            return this.projectApplicationService.findAll();
        }),
    });

    async applyMiddleware(app: INestApplication) {
        app.use('/project-application', trpcExpress.createExpressMiddleware({ router: this.projectApplicationRouter }));
    }
}

export type ProjectApplicationRouterType = ProjectApplicationRouter['projectApplicationRouter'];
