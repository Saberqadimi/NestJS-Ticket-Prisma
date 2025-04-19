import { BadRequestException, Injectable } from "@nestjs/common";
import { FileValidatorStrategy } from "../interface/file-validator.strategy";

@Injectable()
export class AudioValidator implements FileValidatorStrategy {
    private readonly allowedMimeTypes: string[] = [
        'audio/mpeg',
        'audio/mp3',
        'audio/m4a',
        'audio/wav',
        'audio/ogg',
        'audio/flac',
        'audio/x-aac',
        'audio/aac',
    ];

    validate(file: Express.Multer.File): void {
        if (!this.allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException(
                `Invalid audio format! Allowed formats: ${this.allowedMimeTypes.join(', ')}`
            );
        }
    }
}