import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from '@/config/config';
import { Users } from '@/users/entities/users.entity';
import { UsersService } from '@/users/users.service';

import { Document } from '../documents/entities/documents.entity';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    TypeOrmModule.forFeature([Users, Document]),
    JwtModule.register({
      secret: config.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
