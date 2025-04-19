import { Injectable } from '@nestjs/common';
import { UploadStrategy } from '../interface/upload.strategy';
import { extname } from 'path';
import * as fs from 'fs';
import * as path from 'path';
import { getTypeFile } from '../utils/mime-folder.util';

@Injectable()
export class LocalUploadStrategy implements UploadStrategy {

  async upload(file: Express.Multer.File): Promise<string> {
    const folder = getTypeFile(file.mimetype);
    const uploadPath = path.join(process.cwd(), 'uploads', folder);

    await fs.promises.mkdir(uploadPath, { recursive: true });

    const filePath = path.join(uploadPath, `${Date.now()}-${file.originalname}`);
    await fs.promises.writeFile(filePath, file.buffer);

    return `/${folder}/${path.basename(filePath)}`;
  }

}
