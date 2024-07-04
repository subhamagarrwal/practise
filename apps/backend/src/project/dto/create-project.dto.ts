import { Industry } from '@prisma/client';
import { IsBoolean, IsDateString, IsInt, IsOptional, IsString,IsEnum } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  projectName: string;

  @IsString()
  projectDescription: string;

  @IsBoolean()
  @IsOptional()
  isHiring?: boolean = true;

  @IsDateString()
  @IsOptional()
  startDate?: Date = new Date();

  @IsDateString()
  endDate?: Date;

  @IsBoolean()
  paymentStatus?: boolean = false;

  @IsEnum(Industry)
  industry: Industry;

  @IsInt()
  proposedPrice?: number;
}
