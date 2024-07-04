import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, ProjectSelections } from '@prisma/client';
import { CreateProjectSelectionDto} from './dto/create-project-selection.dto';
import { UpdateProjectSelectionDto} from './dto/update-project-selection.dto';

@Injectable()
export class ProjectSelectionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProjectSelections[]> {
    return this.prisma.projectSelections.findMany();
  }

  async findOne(id: string): Promise<ProjectSelections | null> {
    return this.prisma.projectSelections.findUnique({
      where: { projectSelectionID: id },
    });
  }

  async create(data: CreateProjectSelectionDto): Promise<ProjectSelections> {
    const selectionData: Prisma.ProjectSelectionsCreateInput = {
      project: { connect: { projectID: data.projectProjectID } },
      wage: data.wage,
      OfferingDetails: data.offeringDetails,
      endOfContract: data.endOfContract,
      empType: data.empType,
      projectRole : data.projectRole
    };

    return this.prisma.projectSelections.create({ data: selectionData });
  }

  async update(id: string, data: UpdateProjectSelectionDto): Promise<ProjectSelections> {
    const selectionData: Prisma.ProjectSelectionsUpdateInput = {
      wage: data.wage,
      OfferingDetails: data.offeringDetails!,
      endOfContract: data.endOfContract,
      empType: data.empType,
      projectRole : data.projectRole
    };

    return this.prisma.projectSelections.update({
      where: { projectSelectionID: id },
      data: selectionData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.projectSelections.delete({
      where: { projectSelectionID: id },
    });
  }
}
