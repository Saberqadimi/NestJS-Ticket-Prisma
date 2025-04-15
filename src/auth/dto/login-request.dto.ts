import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginRequestDto {
    @ApiProperty({ example: 'john.doe@example.com' })
    @IsNotEmpty()
    email: string;
  
    @ApiProperty({ example: 'password123' })
    @IsNotEmpty()
    password: string;
}