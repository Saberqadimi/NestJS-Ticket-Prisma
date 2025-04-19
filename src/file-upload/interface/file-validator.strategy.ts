
export interface FileValidatorStrategy {
  validate(file: Express.Multer.File): void;
}
