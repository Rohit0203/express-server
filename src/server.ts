import Config from "./config/IConfig";
import * as bodyParser from "body-parser";
import * as express from "express";
import { request } from 'https';
const router=require('./router');
const app = express();
export default class HttpServer {
  constructor(private config: Config) {}
  public bootstrap() {
    this.setUpRoutes();
    this.initBodyParser();
  }
  private setUpRoutes() {
    app.use('/',router)
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
