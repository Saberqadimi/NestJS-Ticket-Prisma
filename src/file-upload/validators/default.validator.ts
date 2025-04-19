import { Injectable, BadRequestException } from '@nestjs/common';
import { FileValidatorStrategy } from '../interface/file-validator.strategy';

@Injectable()
export class DefaultValidator implements FileValidatorStrategy {
  validate(file: Express.Multer.File): void {
    throw new BadRequestException(`Unsupported file type: ${file.mimetype}`);
  }
}
