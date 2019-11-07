import * as bodyParser from 'body-parser';
import * as express from 'express';
import IConfig from './config/IConfig';
import Database from './libs/database';
import router from './router';

const app = express();
const database = new Database();

export default class HttpServer {
  constructor(private config: IConfig) {}
  public bootstrap() {
    this.initBodyParser();
    this.setUpRoutes();
  }
  public async run() {
    const connection = await database.open(this.config.MONGO_URL);
    if (connection) {
      app.listen(this.config.PORT, () => {
        console.log(`Server is running at PORT:${this.config.PORT}`);
      });
    }
  }
  public initBodyParser() {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(bodyParser.json());
    // parse application/json

  }

  private setUpRoutes() {
    app.use('/api/v1', router);
  }
}
