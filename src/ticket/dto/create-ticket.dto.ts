import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Department } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {

  @ApiProperty({ example: 'How to Deploy Project' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'this is description sample...' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'select department in beetwen this fields: [OTHER,TECHNICAL,SALE,SUPPORT]' })
  @IsNotEmpty()
  @IsEnum(Department)
  department: Department;
}
