
import { Router } from 'express';
const router = new Router();
import tagController from '../controllers/tagController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  tagController.create)
router.get('/', tagController.getAll)
router.get('/:id', tagController.getOne);
router.put('/:id', checkRole('ADMIN'), tagController.edit);

router.delete('/:id',tagController.delete)

export default router;