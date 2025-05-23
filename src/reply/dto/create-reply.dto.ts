import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReplyDto {
  @ApiProperty({ example: 'Thanks for the update. We are checking the issue.' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  ticketId: number;
}
