import { IsString, IsOptional, IsUUID, IsNotEmpty, IsIn, ValidateIf } from 'class-validator';

export class CreateMessageInputDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsIn(['client', 'freelancer'])
  senderType: 'client' | 'freelancer';

  @ValidateIf(o => o.senderType === 'freelancer')
  @IsUUID()
  senderFreelancerID: string;

  @ValidateIf(o => o.senderType === 'client')
  @IsUUID()
  senderClientID: string;

  @IsUUID()
  @IsNotEmpty()
  conversationID: string;

}