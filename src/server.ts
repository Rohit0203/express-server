import * as bodyParser from 'body-parser';
import * as express from 'express';
import { request } from 'https';
import IConfig from './config/IConfig';
import router from './router';
const app = express();
export default class HttpServer {
  constructor(private config: IConfig) { }
  public bootstrap() {
    this.setUpRoutes();
    this.initBodyParser();
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
  private setUpRoutes() {
    app.use('/api/v1', router);
  }
}
