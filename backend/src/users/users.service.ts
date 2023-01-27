import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { DocumentsService } from '@/documents/documents.service';
import { Roles } from '@/roles/types/roles.enum';

import { Document } from '../documents/entities/documents.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/users.entity';

dotenv.config();

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
    private documentsService: DocumentsService,
  ) {}

  async create(user: CreateUserDto): Promise<Users> {
    const [checkUser] = await this.usersRepository.findBy({ address: user.address });

    if (checkUser) {
      throw new HttpException('User already exists', HttpStatus.NOT_ACCEPTABLE);
    }

    return this.usersRepository.save({ ...user, role: Roles.User });
  }

  async upgrade(address: string): Promise<UpdateResult> {
    return this.usersRepository.update({ address }, { role: Roles.Admin });
  }

  async getAll(): Promise<Users[]> {
    const users = await this.usersRepository.find();
    const documents = await this.documentsService.getAll();

    return users.map((user) => ({
      ...user,
      documents: documents.filter((document) => document.owner === user.address).map((document) => document.content),
    }));
  }

  async getOne(address: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ address });
    const documents = await this.documentsService.getAll();

    return {
      ...user,
      documents: documents.filter((document) => document.owner === user.address).map((document) => document.content),
    };
  }

  async remove(address: string): Promise<DeleteResult> {
    return this.usersRepository.delete({ address });
  }
}
