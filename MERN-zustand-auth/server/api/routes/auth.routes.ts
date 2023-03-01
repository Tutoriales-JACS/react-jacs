
import { Router } from "express";
import { loginHandler, profileHandler } from "../controller/auth.controller";
import { requireAuth } from "../middlewares/requiredAuth";

const authRoutes = Router();

authRoutes.post('/login', loginHandler);

authRoutes.get('/profile', requireAuth, profileHandler);

export default authRoutes;