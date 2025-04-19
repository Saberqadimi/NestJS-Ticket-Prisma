import { Injectable } from '@nestjs/common';
import { FileValidatorFactory } from './validators/file.validator.factory';

@Injectable()
export class FileValidationService {
  constructor(private readonly fileValidatorFactory: FileValidatorFactory) {}

  validate(file: Express.Multer.File): void {
    const validator = this.fileValidatorFactory.getValidator(file.mimetype);
    validator.validate(file); 
  }
}
