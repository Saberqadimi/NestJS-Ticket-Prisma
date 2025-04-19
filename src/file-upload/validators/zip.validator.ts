import { BadRequestException, Injectable } from '@nestjs/common';
import { FileValidatorStrategy } from '../interface/file-validator.strategy';

@Injectable()
export class ZipValidator implements FileValidatorStrategy {

    validate(file: Express.Multer.File): void {
        if (file.mimetype !== 'application/zip') {
            throw new BadRequestException('Invalid zip file format!');
        }
    }
}
