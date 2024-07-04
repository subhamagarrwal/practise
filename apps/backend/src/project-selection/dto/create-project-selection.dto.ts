import { IsDateString, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { EmployeeType } from '@prisma/client';
import { Skills } from '@prisma/client';

export class CreateProjectSelectionDto {
  @IsString()
  projectProjectID: string;

  @IsInt()
  wage: number;

  @IsOptional()
  @IsString()
  offeringDetails?: string;

  @IsDateString()
  endOfContract: Date;

  @IsEnum(EmployeeType)
  @IsOptional()
  empType?: EmployeeType;

  @IsOptional()
  @IsEnum(Skills, { each: true }) 
  projectRole?: Skills[];
}