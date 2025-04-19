import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FileValidationService } from './file-validation.service';
import { UploadContext } from './upload.context';
import { PrismaService } from '../prisma/prisma.service';
import { getTypeFile } from './utils/mime-folder.util';
import { join } from 'path';
import { unlink } from 'fs';
import { promisify } from 'util';
import { DatabaseFile } from './types/file.model';

const unlinkAsync = promisify(unlink);


@Injectable()
export class FileUploadService {
  constructor(
    private readonly uploadContext: UploadContext,
    private readonly prisma: PrismaService,
  ) { }

  async findAll(page: number, limit: number, type?: string) {
    const skip = (page - 1) * limit;

    const where = type ? { fileType: type } : {};
    const files = await this.prisma.file.findMany({
      skip,
      take: limit,
      where,
    });

    const totalFiles = await this.prisma.file.count({ where });
    const totalPages = Math.ceil(totalFiles / limit);

    const updatedFiles = files.map(file => ({
      ...file,
      path: file.diskLocation === 'local'
        ? `http://localhost:3001/uploads${file.path}`
        : 'www.example-cdn-storage.com/' + file.path,
    }));

    return {
      files: updatedFiles,
      totalFiles,
      totalPages,
      currentPage: page,
      pageSize: limit,
    };
  }



  async uploadFile(file: Express.Multer.File, destination: 'local' | 'cdn') {
    this.uploadContext.setStrategy(destination);
    const type = getTypeFile(file.mimetype);
    const url = await this.uploadContext.upload(file);

    await this.prisma.file.create({
      data: {
        filename: file.originalname,
        diskLocation: destination,
        path: url,
        size: file.size,
        fileType: type,
      },
    });

    return { url };
  }

  async deleteFile(fileId: number): Promise<{ success: boolean; message: string }> {
    const file = await this.prisma.file.findUnique({ where: { id: fileId } });

    if (!file) {
      throw new NotFoundException('File not found');
    }

    try {
      if (file.diskLocation === 'local') {
        await this.deleteLocalFile(file);
      } else if (file.diskLocation === 'cdn') {
        await this.deleteCdnFile(file);
      }

      await this.prisma.file.delete({ where: { id: fileId } });

      return {
        success: true,
        message: `File with ID: ${fileId} successfully deleted.`
      };
    } catch (error) {
      console.error(`Error deleting file ID ${fileId}:`, error);
      throw new BadRequestException(`Error deleting file: ${error.message}`);
    }
  }

  private async deleteLocalFile(file: { path: string }): Promise<void> {
    const uploadsDir = join(__dirname, '..', '..', 'uploads');
    const filePath = join(uploadsDir, file.path);

    console.log(`Attempting to delete file at path: ${filePath}`);

    try {
      await unlinkAsync(filePath);
      console.log(`Local file deleted: ${filePath}`);
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`Local file not found: ${filePath}`);
      } else {
        throw new Error(`Failed to delete local file: ${err.message}`);
      }
    }
  }

  private async deleteCdnFile(file: DatabaseFile): Promise<void> {
    try {
      // Example CDN deletion - replace with your actual CDN API calls
      console.log(`CDN file deleted: ${file.path}`);
    } catch (error) {
      throw new Error(`Failed to delete CDN file: ${error.message}`);
    }
  }

}
