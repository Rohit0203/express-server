import Config from "./config/IConfig";
import * as bodyParser from "body-parser";
import * as express from "express";
const app = express();
export default class HttpServer {
  constructor(private config: Config) {}
  public bootstrap() {
    this.setUpRoutes();
    this.initBodyParser();
  }
  private setUpRoutes() {
    app.get("/health-check", (req, res) => {
      res.send("<h1>I am OK</h1>");
    });
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
