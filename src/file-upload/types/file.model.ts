export interface DatabaseFile {
    id: number;
    filename: string;
    diskLocation: string; 
    path: string;
    size: number;
    fileType: string;
    createdAt: Date;
  }