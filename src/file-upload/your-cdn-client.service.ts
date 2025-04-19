import { Injectable } from '@nestjs/common';

@Injectable()
export class YourCdnClient {
  async upload(buffer: Buffer, path: string): Promise<string> {
    // اینجا باید کد واقعی ارسال به CDN بنویسی، مثلا S3 یا Cloudinary
    console.log(`Uploading to CDN at path: ${path}`);
    
    // فرض کن لینک CDN برگشتی اینه:
    return `https://cdn.yoursite.com/${path}`;
  }
}
