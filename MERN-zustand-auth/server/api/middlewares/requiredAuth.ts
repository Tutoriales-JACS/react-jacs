import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const requireAuth = ( req:Request, res:Response, next:NextFunction)=>
{
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1];
    if(!authHeader|| !token) return res.status(401).json({
        message: 'Unauthorized'
    })
    jwt.verify(token,'secret_023ñ', (err, payload)=>{
        if(err) return res.status(401).json({
            message: 'Unauthorized'
        })
        req.user = payload;
    })
    next();
}