import * as dotenv from 'dotenv';
import Config from './IConfig';
dotenv.config();

const envs: Config = {
  MONGO_URL: String(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  PORT: Number(process.env.PORT),
};

Object.freeze(envs);
export default envs;

