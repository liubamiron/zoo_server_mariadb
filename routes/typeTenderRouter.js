
import { Router } from 'express';
const router = new Router();
import typeTenderController from '../controllers/typeTenderController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'), typeTenderController.create)
router.get('/', typeTenderController.getAll)
router.get('/:id', typeTenderController.getOne);
router.put('/:id', checkRole('ADMIN'), typeTenderController.edit);

router.delete('/:id',typeTenderController.delete)

export default router;