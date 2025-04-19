import { Injectable } from '@nestjs/common';
import { UploadStrategy } from '../interface/upload.strategy';
import { YourCdnClient } from '../your-cdn-client.service';
import { getTypeFile } from '../utils/mime-folder.util';

@Injectable()
export class CdnUploadStrategy implements UploadStrategy {
  constructor(private readonly yourCdnClient: YourCdnClient) { }

  async upload(file: Express.Multer.File): Promise<string> {
    const folder = getTypeFile(file.mimetype);
    const filePath = `${folder}/${Date.now()}-${file.originalname}`;

    const uploadedUrl = await this.yourCdnClient.upload(file.buffer, filePath);
    return uploadedUrl;
  }
}