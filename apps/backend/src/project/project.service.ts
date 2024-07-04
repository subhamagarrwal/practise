import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Project } from '@prisma/client';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { UpdateProjectDto } from '../project/dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async findOne(projectID: string): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { projectID },
    });
  }

  async create(data: CreateProjectDto): Promise<Project> {
    const projectData: Prisma.ProjectCreateInput = {
        projectName: data.projectName,
        projectDescription: data.projectDescription,
        isHiring: data.isHiring,
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: new Date(data.endDate!), 
        paymentStatus: data.paymentStatus,
        industry: data.industry,
        proposedPrice: data.proposedPrice ?? 0, 
      };
    return this.prisma.project.create({ data: projectData });
  }

  async update(projectID: string, data: UpdateProjectDto): Promise<Project> {
    const projectData: Prisma.ProjectUpdateInput = {
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      isHiring: data.isHiring,
      startDate: data.startDate,
      endDate: data.endDate,
      paymentStatus: data.paymentStatus,
      industry: data.industry,
      proposedPrice: data.proposedPrice,
    };

    return this.prisma.project.update({
      where: { projectID },
      data: projectData,
    });
  }

  async delete(projectID: string): Promise<void> {
    await this.prisma.project.delete({
      where: { projectID },
    });
  }
}