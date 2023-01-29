import { Injectable, Logger } from '@nestjs/common';
import { File, Web3Storage } from 'web3.storage';

import { config } from '@/config/config';

@Injectable()
export class IpfsService {
  private readonly client = new Web3Storage({ token: config.web3StorageApiKey });
  private readonly logger = new Logger(IpfsService.name);

  private totalSize = 0;
  private uploaded = 0;

  constructor() {
    this.safeFiles = this.safeFiles.bind(this);
    this.onRootCidReady = this.onRootCidReady.bind(this);
    this.onStoredChunk = this.onStoredChunk.bind(this);
  }

  private onRootCidReady(cid: string) {
    this.logger.log(`Uploading files with cid: ${cid}`);
  }

  private onStoredChunk(size: number) {
    this.uploaded += size;

    const pct = 100 * (this.uploaded / this.totalSize);

    this.logger.log(`Uploading... ${(pct > 100 ? 100 : pct).toFixed(2)}% complete`);
  }

  async safeFiles(files: File[], name = 'file-coin-files') {
    this.totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
    this.uploaded = 0;

    const cid = await this.client.put(files, {
      name,
      onRootCidReady: this.onRootCidReady,
      onStoredChunk: this.onStoredChunk,
    });

    const link = `https://${cid}.ipfs.w3s.link/`;

    return { baseLink: link, links: files.map((file) => `${link}${file.name}`) };
  }

  async safeDocument(document: string) {
    const buffer = Buffer.from(JSON.stringify(document));

    const file = new File([buffer], `document.json`);

    const links = await this.safeFiles([file], 'file-coin-document');

    return links;
  }
}
