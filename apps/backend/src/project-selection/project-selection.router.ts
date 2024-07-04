import { Injectable, INestApplication } from "@nestjs/common";
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from "@server/trpc/trpc.service";
import { ProjectSelectionService } from "./project-selection.service";
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CreateProjectSelectionDto } from './dto/create-project-selection.dto';
import { UpdateProjectSelectionDto } from './dto/update-project-selection.dto';

@Injectable()
export class ProjectSelectionRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly projectSelectionService: ProjectSelectionService,
    ) {}

    projectSelectionRouter = this.trpc.router({
        createProjectSelection: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const dto = plainToClass(CreateProjectSelectionDto, input);
                await validateOrReject(dto);
                return this.projectSelectionService.create(dto);
            }),

        getProjectSelection: this.trpc.procedure
            .input(z.object({ projectSelectionID: z.string() }))
            .query(async ({ input }) => {
                return this.projectSelectionService.findOne(input.projectSelectionID);
            }),

        updateProjectSelection: this.trpc.procedure
            .input(z.any())
            .mutation(async ({ input }) => {
                const { projectSelectionID, ...rest } = input;
                const dto = plainToClass(UpdateProjectSelectionDto, rest);
                await validateOrReject(dto);
                return this.projectSelectionService.update(projectSelectionID, dto);
            }),

        deleteProjectSelection: this.trpc.procedure
            .input(z.object({ projectSelectionID: z.string() }))
            .mutation(async ({ input }) => {
                await this.projectSelectionService.delete(input.projectSelectionID);
                return { success: true };
            }),

        listProjectSelections: this.trpc.procedure.query(async () => {
            return this.projectSelectionService.findAll();
        }),
    });

    async applyMiddleware(app: INestApplication) {
        app.use('/project-selection', trpcExpress.createExpressMiddleware({ router: this.projectSelectionRouter }));
    }
}

export type ProjectSelectionRouterType = ProjectSelectionRouter['projectSelectionRouter'];
