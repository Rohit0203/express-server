import * as dotenv from 'dotenv';
import Config from './IConfig';
dotenv.config();

const envs: Config = {
  MONGO_URL: String(process.env.MONGO_URL),
  NODE_ENV: String(process.env.NODE_ENV),
  PORT: Number(process.env.PORT),
  SALT: String(process.env.SALT),
};

Object.freeze(envs);
export default envs;
