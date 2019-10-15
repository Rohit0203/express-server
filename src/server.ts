import Config from "./config/IConfig";
import * as bodyParser from "body-parser";
import * as express from "express";
import { request } from 'https';
import router from './router'
const app = express();
export default class HttpServer {
  constructor(private config: Config) {}
  public bootstrap() {
    this.setUpRoutes();
    this.initBodyParser();
  }
  private setUpRoutes() {
   app.use('/api', router)
  }
  public run() {
    app.listen(this.config.PORT, () => {
      console.log(`Server is running at PORT:${this.config.PORT}`);
    });
  }
  public initBodyParser() {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());
  }
}
