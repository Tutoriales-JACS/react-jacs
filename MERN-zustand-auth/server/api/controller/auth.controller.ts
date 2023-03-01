import { Request, Response } from "express";
import jwt from 'jsonwebtoken'


export const loginHandler = (req:Request, res:Response)=>
{
    // process req.body -> email, password
    // validate
    const {email, password} = req.body;
    // generate token -> json web token
    const token = jwt.sign({
        user: email,
        name: "name",
        lastname: "lastname"
    }, 'secret_023ñ',{
        expiresIn: 60 * 60 * 24
    });
    
    return res.json({
        token: token
    })
}

export const profileHandler = (req: Request, res: Response) =>
{
    return res.json({
        msj: 'hello',
        profile : req.user
    })
}