import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { UploadContext } from './upload.context';
import { LocalUploadStrategy } from './strategies/local-upload-strategy';
import { CdnUploadStrategy } from './strategies/cdn-upload-strategy';
import { FileValidationService } from './file-validation.service';
import { ImageValidator } from './validators/image.validator';
import { VideoValidator } from './validators/video.validator';
import { ExcelValidator } from './validators/excel.validator';
import { DefaultValidator } from './validators/default.validator';
import { YourCdnClient } from './your-cdn-client.service';
import { FileValidatorFactory } from './validators/file.validator.factory';
import { PDFValidator } from './validators/pdf.validator';
import { AudioValidator } from './validators/audio.validator';
import { ZipValidator } from './validators/zip.validator';

@Module({
  controllers: [FileUploadController],
  providers: [
    FileUploadService,
    FileValidatorFactory,
    YourCdnClient,
    UploadContext,
    LocalUploadStrategy,
    CdnUploadStrategy,
    FileValidationService,
    ImageValidator,
    AudioValidator,
    VideoValidator,
    ExcelValidator,
    ZipValidator,
    DefaultValidator,
    PDFValidator
  ],
  exports: [UploadContext],
})
export class FileUploadModule { }
