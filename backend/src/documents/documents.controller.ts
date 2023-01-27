import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Roles } from '@/roles/decorators/roles.decorator';
import { Roles as RolesEnum } from '@/roles/types/roles.enum';

import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-documents.dto';
import { UpdateDocumentDto } from './dto/update-documents.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Post('create')
  // @Roles(RolesEnum.Admin)
  async create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  async getAll() {
    return this.documentsService.getAll();
  }

  @Patch('update')
  @Roles(RolesEnum.Owner)
  async update(@Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentsService.update(updateDocumentDto);
  }

  @Delete('remove/:id')
  // @Roles(RolesEnum.Admin)
  async remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
