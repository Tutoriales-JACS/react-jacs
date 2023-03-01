import express from 'express';
import authRoutes from './api/routes/auth.routes';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials:true
}))
app.use(express.json())
app.use(authRoutes);

export default app;