"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialRoutes = void 0;
var userRoutes_1 = require("./userRoutes");
var initialRoutes = /** @class */ (function () {
    function initialRoutes() {
        this.user = new userRoutes_1.userRoutes();
    }
    initialRoutes.prototype.initialRoutes = function (app) {
        this.user.userroutes(app);
    };
    return initialRoutes;
}());
exports.initialRoutes = initialRoutes;
