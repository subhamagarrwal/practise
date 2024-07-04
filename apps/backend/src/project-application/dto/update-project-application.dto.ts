import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectApplicationDto } from '../dto/create-project-application.dto';

export class UpdateProjectApplicationDto extends PartialType(CreateProjectApplicationDto) {
 
}