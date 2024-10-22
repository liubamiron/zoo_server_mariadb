
import { Router } from 'express';
const router = new Router();
import postController from '../controllers/postController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  postController.create)
router.get('/', postController.getAll)
router.get('/:id', postController.getOne);
router.put('/:id', checkRole('ADMIN'), postController.edit);

router.delete('/:id',postController.delete)

export default router;