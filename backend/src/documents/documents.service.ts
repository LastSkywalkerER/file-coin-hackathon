import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { request } from 'undici';

import { IpfsService } from '@/ipfs/ipfs.service';

import { CreateDocumentDto } from './dto/create-documents.dto';
import { GetDocumentDto } from './dto/get-documents.dto';
import { UpdateDocumentDto } from './dto/update-documents.dto';
import { Document } from './entities/documents.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
    private ipfsService: IpfsService,
  ) {}

  async create({ content, owner }: CreateDocumentDto): Promise<Document> {
    const { links } = await this.ipfsService.safeDocument(content);

    return this.documentsRepository.save({ link: links[0], owner });
  }

  async getAll(): Promise<GetDocumentDto[]> {
    const bdDocuments = await this.documentsRepository.find();

    const documents = Promise.all(
      bdDocuments.map(async (document) => {
        const { body } = await request(document.link);
        const data = await body.json();

        return { ...document, content: data };
      }),
    );

    return documents;
  }

  async update({ content, id, owner }: UpdateDocumentDto): Promise<GetDocumentDto> {
    const { links } = await this.ipfsService.safeDocument(content);

    await this.documentsRepository.update({ id }, { id, link: links[0], owner });

    return { content, id, owner, link: links[0] };
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.documentsRepository.delete({ id });
  }
}
