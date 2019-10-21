import * as dotenv from 'dotenv';
import Config from './IConfig';
dotenv.config();

const envs: Config = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
};
Object.freeze(envs);
export default envs;

