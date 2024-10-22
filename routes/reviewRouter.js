
import { Router } from 'express';
const router = new Router();
import reviewController from '../controllers/reviewController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';



router.post('/', checkRole('ADMIN'),  reviewController.create)
router.get('/', reviewController.getAll)
router.get('/:id', reviewController.getOne);
router.put('/:id', checkRole('ADMIN'), reviewController.edit);

router.delete('/:id',reviewController.delete)

export default router;