import { IsInt, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApplicantStatus } from '@prisma/client';

export class CreateProjectApplicationDto {
  @IsString()
  projectProjectID: string;

  @IsInt()
  proposedAmount: number;

  @IsOptional()
  @IsString()
  addtionalNotes ?: string;

  @IsEnum(ApplicantStatus)
  @IsOptional()
  status?: ApplicantStatus = ApplicantStatus.pending;
}
