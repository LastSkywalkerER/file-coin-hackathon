import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { CreateDocumentDto } from './dto/create-documents.dto';
import { UpdateDocumentDto } from './dto/update-documents.dto';
import { Document } from './entities/documents.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
  ) {}

  async create(document: CreateDocumentDto): Promise<Document> {
    const [checkDocument] = await this.documentsRepository.findBy({ cid: document.cid });

    if (checkDocument) {
      throw new HttpException('Document already exists', HttpStatus.NOT_ACCEPTABLE);
    }

    return this.documentsRepository.save(document);
  }

  async getAll(): Promise<Document[]> {
    return this.documentsRepository.find();
  }

  async update(document: UpdateDocumentDto): Promise<UpdateResult> {
    return this.documentsRepository.update({ id: document.id }, document);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.documentsRepository.delete({ id });
  }
}
