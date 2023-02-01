import { AppError, HttpCode } from './error';
import express from 'express';
import admin from '../config/firestore';

export interface CustomRequest extends express.Request {
    userId: string;
}

export const verifyAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const [ bearer, token ] = req.headers.authorization?.split(" ") || [ "", "" ];
        if (bearer === "JWT" && token ) {
            const decoded = await verifyFirebaseAuthToken(token);
            (req as CustomRequest).userId = decoded;
            next();
        }
        else
            throw new AppError({ httpCode: HttpCode.UNAUTHORIZED, message: "Unauthorized access." });
    } catch(error) {
        next(error);
    }
};

export const verifyFirebaseAuthToken = async (token: string) => {
    try {
        const user = await admin.auth().verifyIdToken(token);
        return user.uid;
    } catch (error) {
        throw new AppError({ httpCode: HttpCode.UNAUTHORIZED, message: "Unauthorized access." });
    }
}
