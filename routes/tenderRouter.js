
import { Router } from 'express';
const router = new Router();
import tenderController from '../controllers/tenderController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  tenderController.create)
router.get('/', tenderController.getAll)
router.get('/:id', tenderController.getOne);
router.put('/:id', checkRole('ADMIN'), tenderController.edit);

router.delete('/:id',tenderController.delete)

export default router;