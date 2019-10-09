"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var HttpServer = /** @class */ (function () {
    function HttpServer(config) {
        this.config = config;
    }
    HttpServer.prototype.bootstrap = function () {
        this.setUpRoutes();
    };
    HttpServer.prototype.setUpRoutes = function () {
        app.get('/health-check', function (req, res) {
            res.send('<h1>I am OK</h1>');
        });
    };
    HttpServer.prototype.run = function () {
        var _this = this;
        app.listen(this.config.PORT, function () {
            console.log("Server is running at PORT:" + _this.config.PORT);
        });
    };
    return HttpServer;
}());
exports["default"] = HttpServer;
