"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
var Response = /** @class */ (function () {
    function Response() {
    }
    Response.prototype.Success = function (data, token, message) {
        return {
            success: true,
            statusCode: 200,
            data: data,
            token: token,
            message: message
        };
    };
    Response.prototype.falied = function (message) {
        return {
            success: false,
            statusCode: 404,
            message: message
        };
    };
    Response.prototype.error = function (message) {
        return {
            success: false,
            statusCode: 400,
            message: message,
        };
    };
    Response.prototype.notFound = function () {
        return {
            success: true,
            statusCode: 401,
            data: null,
            message: "Not found",
        };
    };
    Response.prototype.badRequest = function (message) {
        return {
            success: false,
            statusCode: 404,
            data: null,
            message: message
        };
    };
    ;
    return Response;
}());
exports.Response = Response;
