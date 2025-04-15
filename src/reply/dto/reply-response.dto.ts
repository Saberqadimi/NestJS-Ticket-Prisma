import { ApiProperty } from '@nestjs/swagger';

export class ReplyResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Thanks for the update. We are checking the issue.' })
  content: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  ticketId: number;

  @ApiProperty({ example: '2025-04-15T13:20:00Z' })
  createdAt: string;
}
