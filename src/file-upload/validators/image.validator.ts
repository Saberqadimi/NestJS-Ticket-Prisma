import { BadRequestException, Injectable } from "@nestjs/common";
import { FileValidatorStrategy } from "../interface/file-validator.strategy";

@Injectable()
export class ImageValidator implements FileValidatorStrategy {
  validate(file: Express.Multer.File): void {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      throw new BadRequestException('Invalid image format!');
    }
  }
}
