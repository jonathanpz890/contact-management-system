import { Router } from 'express';
import { handleValidationErrors } from '../helpers/errorHandler';
import { createContact, deleteContact, getAllContacts, updateContact } from '../services/contacts';
import { createContactVlidation, deleteContactValidation, updateContactValidation } from '../validation/contact-validation';

const router = Router();

// Create a contact
router.post('/', createContactVlidation, handleValidationErrors, createContact);

// Get all contacts
router.get('/', getAllContacts);

// Update a contact
router.put('/:id', updateContactValidation, handleValidationErrors, updateContact);

// Delete a contact
router.delete('/:id', deleteContactValidation, handleValidationErrors, deleteContact);

export default router;
