import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class FileTypePipe implements PipeTransform {
    private readonly allowedTypes = [
        'image',
        'video',
        'excel',
        'zip',
        'pdf',
        'audio',
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        if (value && !this.allowedTypes.includes(value)) {
            throw new BadRequestException('Invalid file type');
        }
        return value;
    }
}
