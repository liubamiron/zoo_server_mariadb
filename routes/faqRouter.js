
import { Router } from 'express';
const router = new Router();
import faqController from '../controllers/faqController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  faqController.create)
router.get('/', faqController.getAll)
router.get('/:id', faqController.getOne);
router.put('/:id', checkRole('ADMIN'), faqController.edit);

router.delete('/:id',faqController.delete)

export default router;