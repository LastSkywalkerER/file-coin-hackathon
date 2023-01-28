import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { dataSourceOptions } from './config/postgres/postgres.configuration';
import { DocumentsModule } from './documents/documents.module';
import { RolesGuard } from './roles/guards/roles.guard';
import { UsersModule } from './users/users.module';
import { IpfsService } from './ipfs/ipfs.service';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, AuthModule, DocumentsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useExisting: JwtAuthGuard,
    },
    JwtAuthGuard,
    {
      provide: APP_GUARD,
      useExisting: RolesGuard,
    },
    RolesGuard,
    {
      provide: APP_GUARD,
      useExisting: LocalAuthGuard,
    },
    LocalAuthGuard,
    IpfsService,
  ],
})
export class AppModule {}
