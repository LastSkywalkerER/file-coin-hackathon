import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IpfsService } from '@/ipfs/ipfs.service';

import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { Document } from './entities/documents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document])],
  controllers: [DocumentsController],
  providers: [DocumentsService, IpfsService],
})
export class DocumentsModule {}
