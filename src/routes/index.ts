import { Router } from 'express';
import contactRouter from './contact';
import groupsRouter from './group';

const router = Router();

//Contact routes
router.use('/contacts', contactRouter);
//Group routes
router.use('/groups', groupsRouter);

export default router;