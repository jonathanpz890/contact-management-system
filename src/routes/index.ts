import { Router } from 'express';
import contactRouter from './contact';
import groupsRouter from './group';

const router = Router();

router.use('/contacts', contactRouter);
router.use('/groups', groupsRouter);

export default router;