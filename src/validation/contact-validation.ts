import { check } from "express-validator";

export const createContactVlidation = [
    check('firstName').notEmpty().isString().withMessage('First name is required'),
    check('lastName').notEmpty().isString().withMessage('Last name is required'),
    check('country').notEmpty().isString().withMessage('Country is required'),
    check('city').notEmpty().isString().withMessage('City is required'),
    check('street').isString(),
    check('zipcode').isString(),
    check('phone')
        .notEmpty().withMessage('Phone is required')
        .matches(/^[0-9]+$/).withMessage('Phone number is invalid'),
    check('email').isEmail(),
]
export const updateContactValidation = [
    check('id').isInt(),
    check('firstName').isString(),
    check('lastName').isString(),
    check('country').isString(),
    check('city').isString(),
    check('street').isString(),
    check('zipcode').isString(),
    check('phone').matches(/^[0-9]+$/).withMessage('Phone number is invalid'),
    check('email').isEmail()
]
export const deleteContactValidation = [
    check('id').isInt()
]