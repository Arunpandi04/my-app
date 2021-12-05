"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var UserSchema = new mongoose_1.default.Schema({
    profilePicture: String,
    email: String,
    address: String,
    firstName: String,
    lastName: String,
    gender: { type: Gender },
    phoneNumber: Number,
    dob: String,
    password: String
}, { timestamps: true });
exports.default = mongoose_1.default.model('user', UserSchema);
