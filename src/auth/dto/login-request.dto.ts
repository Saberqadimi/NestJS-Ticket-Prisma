import { ApiProperty } from "@nestjs/swagger";

export class LoginRequestDto {
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;
  
    @ApiProperty({ example: 'password123' })
    password: string;
}