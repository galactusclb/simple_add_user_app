import { body } from 'express-validator';

export const validateRegister = [
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage("Email does not match correct email format"),
    body('password').trim().notEmpty().withMessage('Password is required'),
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
];
