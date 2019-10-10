"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var router = require('./router');
var app = express();
var HttpServer = /** @class */ (function () {
    function HttpServer(config) {
        this.config = config;
    }
    HttpServer.prototype.bootstrap = function () {
        this.setUpRoutes();
        this.initBodyParser();
    };
    HttpServer.prototype.setUpRoutes = function () {
        app.use('/', router);
    };
    HttpServer.prototype.run = function () {
        var _this = this;
        app.listen(this.config.PORT, function () {
            console.log("Server is running at PORT:" + _this.config.PORT);
        });
    };
    HttpServer.prototype.initBodyParser = function () {
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        app.use(bodyParser.json());
    };
    return HttpServer;
}());
exports["default"] = HttpServer;
