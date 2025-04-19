import { BadRequestException, Injectable } from "@nestjs/common";
import { FileValidatorStrategy } from "../interface/file-validator.strategy";

@Injectable()
export class ExcelValidator implements FileValidatorStrategy {
  validate(file: Express.Multer.File): void {
    if (!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(file.mimetype)) {
      throw new BadRequestException('Invalid Excel file!');
    }
  }
}
