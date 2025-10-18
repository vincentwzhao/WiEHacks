import { Router } from 'express';
import { getSuggestions } from '../controllers/suggestController';

const router = Router();

router.post('/suggest', getSuggestions);

export default router;