import { IsIn, IsNotEmpty } from 'class-validator';

export class UploadFileDto {
  @IsNotEmpty()
  filename: string;

  @IsIn(['local', 'cdn'])
  destination: 'local' | 'cdn';
}
