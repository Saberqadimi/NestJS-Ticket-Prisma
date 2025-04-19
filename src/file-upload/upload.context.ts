import { Injectable } from '@nestjs/common';
import { LocalUploadStrategy } from './strategies/local-upload-strategy';
import { CdnUploadStrategy } from './strategies/cdn-upload-strategy';
import { UploadStrategy } from './interface/upload.strategy';

@Injectable()
export class UploadContext {
  private strategy: UploadStrategy;

  constructor(
    private readonly localStrategy: LocalUploadStrategy,
    private readonly cdnStrategy: CdnUploadStrategy,
  ) { }

  setStrategy(strategyType: 'local' | 'cdn') {
    this.strategy =
      strategyType === 'cdn' ? this.cdnStrategy : this.localStrategy;
  }

  async upload(file: Express.Multer.File): Promise<string> {
    if (!this.strategy) throw new Error('Strategy not set.');
    return this.strategy.upload(file);
  }

}
