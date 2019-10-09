"use strict";
exports.__esModule = true;
var envs = require('./config/configuration');
var server_1 = require("./server");
var httpserver = new server_1["default"](envs);
httpserver.bootstrap();
httpserver.run();
