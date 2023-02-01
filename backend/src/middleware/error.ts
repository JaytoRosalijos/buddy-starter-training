import express from "express";

export enum HttpCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export interface AppErrorArgs {
    name?: string;
    httpCode: HttpCode;
    message: string;
}

export class AppError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpCode;
    public readonly message: string;

    
    constructor(args: AppErrorArgs) {
        super(args.message)
        
        this.name = args.name || "Error";
        this.httpCode = args.httpCode;
        this.message = args.message;
    }
}

export const errorHandler = (err: any, req: express.Request, res:  express.Response, next:  express.NextFunction) => {
    if (!err)
        next();
    else {
        // NOTE: for logging purposes
        console.log(err);

        if (err instanceof AppError)
            res.status(err.httpCode).json({message: err.message})
        else
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error"})
    }
}