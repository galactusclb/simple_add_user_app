import { body } from 'express-validator';

export const validateRegister = [
    body('email').trim().notEmpty().isEmail(),
    body('password').trim().notEmpty(),
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
];
