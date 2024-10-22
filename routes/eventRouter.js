
import { Router } from 'express';
const router = new Router();
import eventController from '../controllers/eventController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  eventController.create)
router.get('/', eventController.getAll)
router.get('/:id', eventController.getOne);
router.put('/:id', checkRole('ADMIN'), eventController.edit);

router.delete('/:id',eventController.delete)

export default router;
