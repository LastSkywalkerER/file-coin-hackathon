import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '@/auth/auth.service';

import { Document } from '../documents/entities/documents.entity';
import { Users } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Document])],
  providers: [UsersService, AuthService, JwtService],
  controllers: [UsersController],
})
export class UsersModule {}