"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var userController_1 = require("../Controller/userController");
var Auth_1 = require("../Auth/Auth");
var Authorization = new Auth_1.Auth();
var userRoutes = /** @class */ (function () {
    function userRoutes(UserController) {
        if (UserController === void 0) { UserController = new userController_1.userController(); }
        this.UserController = UserController;
    }
    userRoutes.prototype.userroutes = function (app) {
        console.log("routes");
        app.route('/user/:id').put(this.UserController.updateuser);
        app.route('/signup').post(this.UserController.signup);
        app.route('/signin').post(this.UserController.signin);
        app.route('/user/:id').get(Authorization.Auth, this.UserController.getUser);
    };
    return userRoutes;
}());
exports.userRoutes = userRoutes;
