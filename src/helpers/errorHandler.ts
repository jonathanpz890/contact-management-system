import { Request, Response, NextFunction } from "express";
import { validationResult } from 'express-validator';

export const handleResponseError = (res: Response, error: any, statusCode = 500, customMessage: string = '') => {
    console.error(error);
    res.status(statusCode).json({
        message: error.message || 'An unexpected error occurred',
        customMessage
    });
};
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
};