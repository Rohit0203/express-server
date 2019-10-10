"use strict";
exports.__esModule = true;
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.get = function () {
        return 'This is get Method';
    };
    Controller.prototype.post = function () {
        return 'This is post Method';
    };
    Controller.prototype.put = function () {
        return 'This is put Method';
    };
    Controller.prototype["delete"] = function () {
        return 'This is delete Method';
    };
    return Controller;
}());
exports["default"] = Controller;
