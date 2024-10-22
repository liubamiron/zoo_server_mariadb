
import { Router } from 'express';
const router = new Router();
import weekHoursController from '../controllers/weekHoursController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'), weekHoursController.create);
router.get('/', weekHoursController.getAll);
router.put('/:id', checkRole('ADMIN'), weekHoursController.edit);
router.get('/:id', weekHoursController.getOne);

router.delete('/:id', checkRole('ADMIN'), weekHoursController.delete);

export default router;