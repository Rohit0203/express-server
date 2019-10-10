"use strict";
exports.__esModule = true;
var Controller_1 = require("./controllers/trainee/Controller");
var express = require("express");
var router = express.Router();
var rout = new Controller_1["default"]();
router.get('/get', function (req, res) {
    res.send(rout.get());
});
module.exports = router;
