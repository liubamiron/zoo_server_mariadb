
import { Router } from 'express';
const router = new Router();
import typeController from '../controllers/typeController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.put('/:id', typeController.edit);
router.get('/:id', typeController.getOne);

router.delete('/:id',typeController.delete);

export default router;