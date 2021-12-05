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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
var userDao_1 = require("../Dao/userDao");
var validation_1 = require("../Validation/validation");
var Response_1 = require("../Utils/Response");
var jwt = __importStar(require("jsonwebtoken"));
var lodash_1 = require("lodash");
var response = new Response_1.Response();
var user_validate = new validation_1.User();
var userService = /** @class */ (function () {
    function userService(UserDao) {
        if (UserDao === void 0) { UserDao = new userDao_1.userDao(); }
        this.UserDao = UserDao;
    }
    userService.prototype.signup = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var isUser, data, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UserDao.findone(body.email)];
                    case 1:
                        isUser = _a.sent();
                        if (!!isUser) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.UserDao.create_cart(body)];
                    case 2:
                        data = _a.sent();
                        token = jwt.sign({
                            expiresIn: "3h",
                            data: body.email
                        }, 'secret');
                        return [2 /*return*/, response.Success((0, lodash_1.omit)(data, 'password'), token, "signup success")];
                    case 3: return [2 /*return*/, response.falied("userAlready exist")];
                }
            });
        });
    };
    userService.prototype.signin = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var data, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UserDao.findone(body.email)];
                    case 1:
                        data = _a.sent();
                        console.log("data", data, body.password);
                        if (data.password === body.password) {
                            token = jwt.sign({
                                expiresIn: "3h",
                                data: body.email
                            }, 'secret');
                            console.log("token", (0, lodash_1.omit)(data, 'password'));
                            return [2 /*return*/, response.Success((0, lodash_1.omit)(data, 'password'), token, "signin success")];
                        }
                        else {
                            return [2 /*return*/, response.falied("email or password is incorrect")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    userService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UserDao.getUser(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, response.notFound()];
                        }
                        return [2 /*return*/, response.Success(user, null, "sucess")];
                }
            });
        });
    };
    userService.prototype.updateuser = function (id, body) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user, validation, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.UserDao.getUser(id)];
                    case 1:
                        user = _b.sent();
                        validation = user_validate.validateUser(body);
                        if (validation.message) {
                            return [2 /*return*/, response.badRequest(validation.message)];
                        }
                        user.firstName = body.firstName;
                        user.lastName = body.lastName;
                        user.gender = body.gender;
                        user.dob = body.dob;
                        user.email = body.email;
                        user.address = body.address;
                        return [4 /*yield*/, ((_a = this.UserDao) === null || _a === void 0 ? void 0 : _a.updateuser(user._id, user))];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.UserDao.getUser(id)];
                    case 3:
                        result = _b.sent();
                        if (!result) {
                            return [2 /*return*/, response.notFound()];
                        }
                        return [2 /*return*/, response.Success(result, null, "sucess")];
                }
            });
        });
    };
    return userService;
}());
exports.userService = userService;
