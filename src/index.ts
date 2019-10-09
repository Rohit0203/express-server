const envs =require('./config/configuration')
import HttpServer from './server';
const httpserver=new HttpServer(envs);
httpserver.bootstrap();
httpserver.run();