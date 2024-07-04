import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectSelectionDto } from './create-project-selection.dto';

export class UpdateProjectSelectionDto extends PartialType(CreateProjectSelectionDto) {
 
}
