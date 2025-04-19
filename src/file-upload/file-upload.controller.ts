import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query, UploadedFile, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common";
import { FileUploadService } from "./file-upload.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadFileDto } from "./dto/upload-file.dto";
import { FileValidationService } from "./file-validation.service";
import { FileTypePipe } from "./pipe/file-type.pipe";
import { Role } from "src/auth/enums.role.enum";
import { Roles } from "src/auth/decorators/roles.decorator";
import { RolesGuard } from "src/auth/guards/roles/roles.guard";

@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@Controller('files')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly fileValidationService: FileValidationService
  ) { }

  //list of files
  @Get()
  @UsePipes(FileTypePipe)
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 12,
    @Query('type') type: string
  ) {
    return this.fileUploadService.findAll(page, limit, type);
  }

  //upload
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Body() fileUploadDto: UploadFileDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      this.fileValidationService.validate(file);
      return this.fileUploadService.uploadFile(file, fileUploadDto.destination);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(`Unsupported file type: ${file.mimetype}`);
      }
      throw error;
    }
  }

  //delete file
  @Delete(':id')
  async deleteFile(@Param('id') fileId: number): Promise<{ success: boolean; message: string }> {
    return this.fileUploadService.deleteFile(fileId);
  }
}