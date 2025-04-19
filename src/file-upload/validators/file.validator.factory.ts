import { Injectable } from '@nestjs/common';
import { ImageValidator } from './image.validator';
import { VideoValidator } from './video.validator';
import { ExcelValidator } from './excel.validator';
import { DefaultValidator } from './default.validator';
import { PDFValidator } from './pdf.validator';
import { AudioValidator } from './audio.validator';
import { ZipValidator } from './zip.validator';
import { FileValidatorStrategy } from '../interface/file-validator.strategy';

type ValidatorType = 'image' | 'video' | 'excel' | 'pdf' | 'audio' | 'zip' | 'default';

@Injectable()
export class FileValidatorFactory {
    private readonly validatorsMap: Map<ValidatorType, FileValidatorStrategy>;
    private readonly mimeTypeMap: Map<RegExp, ValidatorType>;

    constructor(
        private readonly imageValidator: ImageValidator,
        private readonly videoValidator: VideoValidator,
        private readonly excelValidator: ExcelValidator,
        private readonly pdfValidator: PDFValidator,
        private readonly zipValidator: ZipValidator,
        private readonly audioValidator: AudioValidator,
        private readonly defaultValidator: DefaultValidator,
    ) {
        this.validatorsMap = new Map([
            ['image', imageValidator],
            ['video', videoValidator],
            ['excel', excelValidator],
            ['zip', zipValidator],
            ['pdf', pdfValidator],
            ['audio', audioValidator],
            ['default', defaultValidator],
        ]);

        this.mimeTypeMap = new Map([
            [/^audio\/(mpeg|mp3|m4a|wav|ogg|flac|x-aac|aac)$/, 'audio'],
            [/^image\//, 'image'],
            [/^video\//, 'video'],
            [
                /^application\/(vnd\.ms-excel|vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet)$/,
                'excel',
            ],
            [/^application\/pdf$/, 'pdf'],
            [/^application\/zip$/, 'zip'],
        ]);
    }

    getValidator(mime: string): FileValidatorStrategy {
        for (const [regex, validatorType] of this.mimeTypeMap) {
            if (regex.test(mime)) {
                const validator = this.validatorsMap.get(validatorType);
                if (!validator) {
                    throw new Error(`Validator not found for mime type: ${mime}`);
                }
                return validator;
            }
        }

        const defaultValidator = this.validatorsMap.get('default');
        if (!defaultValidator) {
            throw new Error(`Default validator not found`);
        }
        return defaultValidator;
    }

}
