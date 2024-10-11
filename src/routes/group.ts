import { Router } from 'express';
import { handleValidationErrors } from '../helpers/errorHandler';
import { createGroup, deleteGroup, getAllGroups } from '../services/groups';
import { createGroupValidation, deleteGroupValidation } from '../validation/group-validation';

const router = Router();

// Create a group
router.post('/', createGroupValidation, handleValidationErrors, createGroup);

// Get all groups
router.get('/', getAllGroups);

// Delete a group
router.delete('/:id', deleteGroupValidation, handleValidationErrors, deleteGroup);

export default router;
