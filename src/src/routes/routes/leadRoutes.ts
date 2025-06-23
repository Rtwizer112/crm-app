import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { createLead, getLeads, updateLead } from '../controllers/leadController';

const router = Router();

router.use(authenticate);

router.route('/')
  .post(createLead)
  .get(getLeads);

router.route('/:id')
  .patch(updateLead);

export default router;
