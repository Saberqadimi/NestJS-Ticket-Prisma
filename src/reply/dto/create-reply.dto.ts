import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateReplyDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsInt()
  ticketId: number;
}
