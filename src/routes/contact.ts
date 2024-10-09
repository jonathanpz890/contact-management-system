import { Router, Request, Response } from 'express';
import Contact from '../../models/contact';

const router = Router();

// Create a contact
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get all contacts
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Update a contact
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    await contact.update(req.body);
    res.json(contact);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a contact
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    await contact.destroy();
    res.json({ message: 'Contact deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
