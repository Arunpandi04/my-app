"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.Auth = function (req, res, next) {
        console.log("auth");
        var token = req.headers.authorization ? req.headers.authorization.split("Bearer ")[1] : null;
        if (token == null)
            return res.status(401).send({ message: "Token inValid" });
        jwt.verify(token, "secret", function (err, decoded) {
            console.log(err);
            if (err)
                return res.status(403).send({ message: "Unauthorized User Token inValid" });
            console.log("decodered", decoded);
            res.locals.jwt = decoded;
            next();
        });
    };
    return Auth;
}());
exports.Auth = Auth;
