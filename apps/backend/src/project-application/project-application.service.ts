import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, ProjectApplications } from '@prisma/client';
import { CreateProjectApplicationDto } from './dto/create-project-application.dto';
import { UpdateProjectApplicationDto } from './dto/update-project-application.dto';


@Injectable()
export class ProjectApplicationService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProjectApplications[]> {
    return this.prisma.projectApplications.findMany();
  }

  async findOne(id: string): Promise<ProjectApplications | null> {
    return this.prisma.projectApplications.findUnique({
      where: { projectApplicationID: id },
    });
  }

  async create(data: CreateProjectApplicationDto): Promise<ProjectApplications> {
    return this.prisma.projectApplications.create({
      data: {
        projectProjectID: data.projectProjectID,
        proposedAmount: data.proposedAmount,
        addtionalNotes: data.addtionalNotes,
      },
    });
  }

  async update(id: string, data: UpdateProjectApplicationDto): Promise<ProjectApplications> {
    return this.prisma.projectApplications.update({
      where: { projectApplicationID: id },
      data: {
        proposedAmount: data.proposedAmount,
        addtionalNotes: data.addtionalNotes,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.projectApplications.delete({
      where: { projectApplicationID: id },
    });
  }
}