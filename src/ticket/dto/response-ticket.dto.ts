import { ApiProperty } from '@nestjs/swagger';

export class TicketResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Issue with login' })
  title: string;

  @ApiProperty({ example: 'The user cannot log in with valid credentials.' })
  description: string;

  @ApiProperty({ example: 1 })
  createdBy: number;

  @ApiProperty({ example: '2025-04-15T12:34:56.789Z' })
  createdAt: string;
}