import { BadRequestException, Injectable } from "@nestjs/common";
import { FileValidatorStrategy } from "../interface/file-validator.strategy";

@Injectable()
export class PDFValidator implements FileValidatorStrategy {
  validate(file: Express.Multer.File): void {
    if (!['application/pdf'].includes(file.mimetype)) {
      throw new BadRequestException('Invalid PDF Format!');
    }
  }
}
