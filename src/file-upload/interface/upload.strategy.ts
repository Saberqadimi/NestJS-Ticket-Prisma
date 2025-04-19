export interface UploadStrategy {
  upload(file: Express.Multer.File): Promise<string>;
}