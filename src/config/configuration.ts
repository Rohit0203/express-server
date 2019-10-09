import * as dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
Object.freeze(envs)
export default {envs}