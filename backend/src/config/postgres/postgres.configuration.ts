import { config } from 'dotenv';
import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Document } from '@/documents/entities/documents.entity';
import { Users } from '@/users/entities/users.entity';

config();

const isProd = process.env.NODE_ENV !== 'development';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  host: process.env.DATABASE_HOST,
  synchronize: !isProd,
  logging: !isProd,
  entities: [Users, Document],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
  name: 'default',
};

export const postgresDataSource: DataSource = new DataSource(dataSourceOptions);
