"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    // process req.body -> email, password
    // validate
    const { email, password } = req.body;
    // generate token -> json web token
    const token = jsonwebtoken_1.default.sign({
        test: "test",
    }, 'secret_023ñ', {
        expiresIn: 60 * 60 * 24
    });
    return res.json({
        token: token
    });
};
exports.loginHandler = loginHandler;
const profileHandler = (req, res) => {
    return res.json({
        msj: 'hello'
    });
};
exports.profileHandler = profileHandler;
