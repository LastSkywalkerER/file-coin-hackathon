import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Document } from '@/documents/entities/documents.entity';
import { Users } from '@/users/entities/users.entity';

import { config, isDev } from '../config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: config.databaseDb,
  username: config.databaseUser,
  password: config.databasePassword,
  port: config.databasePort,
  host: config.databaseHost,
  synchronize: isDev,
  logging: isDev,
  entities: [Users, Document],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
  name: 'default',
};

export const postgresDataSource: DataSource = new DataSource(dataSourceOptions);
