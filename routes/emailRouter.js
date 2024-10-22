
import { Router } from 'express';
const router = new Router();
import emailController from '../controllers/emailController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', emailController.create);
router.get('/', emailController.getAll);
router.put('/:id', checkRole('ADMIN'), emailController.edit);
router.get('/:id', emailController.getOne);

router.delete('/:id', checkRole('ADMIN'), emailController.delete);

export default router;
