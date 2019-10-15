
import envs from './config/configuration';

import HttpServer from './server';
console.log(envs);
const httpserver=new HttpServer(envs);
httpserver.bootstrap();
httpserver.run();