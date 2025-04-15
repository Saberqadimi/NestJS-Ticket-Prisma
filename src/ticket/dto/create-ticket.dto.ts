import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Department } from '@prisma/client';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(Department)
  department: Department;
}
