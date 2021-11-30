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
exports.User = void 0;
var Joi = __importStar(require("joi"));
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.validateUser = function (payload) {
        // create schema object
        var schema = Joi.object({
            id: Joi.string().optional(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            dob: Joi.string().required(),
            gender: Joi.string().valid('Male', 'Female').required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
        });
        // schema options
        var options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true // remove unknown props
        };
        // validate request body against schema
        var _a = schema.validate(payload, options), error = _a.error, value = _a.value;
        if (error) {
            var err = {
                // on fail return comma separated errors
                message: "Validation error: ".concat(error.details
                    .map(function (x) { return x.message; })
                    .join(", "))
            };
            return err;
        }
        else {
            return value;
        }
    };
    return User;
}());
exports.User = User;
