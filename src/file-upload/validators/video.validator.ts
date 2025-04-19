import { BadRequestException, Injectable } from "@nestjs/common";
import { FileValidatorStrategy } from "../interface/file-validator.strategy";

@Injectable()
export class VideoValidator implements FileValidatorStrategy {
  validate(file: Express.Multer.File): void {
    if (!['video/mp4', 'video/quicktime'].includes(file.mimetype)) {
      throw new BadRequestException('Invalid video format!');
    }
  }
}
