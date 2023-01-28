import * as dotenv from 'dotenv';

dotenv.config();

export const isDev = process.env.NODE_ENV && process.env.NODE_ENV === 'development';

const prodConfig = {
  port: process.env.PORT,
  bcryptBounds: process.env.BCRYPT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
  databaseDb: process.env.DATABASE_DB,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databasePort: Number(process.env.DATABASE_PORT),
  databaseHost: process.env.DATABASE_HOST,
  web3StorageApiKey: process.env.WEB3STORAGE_API_KEY,
};

const devConfig = {
  ...prodConfig,
  databaseHost: '0.0.0.0',
};

export const config = isDev ? devConfig : prodConfig;
