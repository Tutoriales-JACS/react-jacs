"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const requiredAuth_1 = require("../middlewares/requiredAuth");
const authRoutes = (0, express_1.Router)();
authRoutes.post('/login', auth_controller_1.loginHandler);
authRoutes.get('/profile', requiredAuth_1.requireAuth, auth_controller_1.profileHandler);
exports.default = authRoutes;
