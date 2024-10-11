import { check } from "express-validator";

export const createGroupValidation = [
    check('name').notEmpty().isString().withMessage('Group name is required'),
]
export const deleteGroupValidation = [
    check('id').isInt()
]