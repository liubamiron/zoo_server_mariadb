
import { Router } from 'express';
const router = new Router();
import newsItemController from '../controllers/newsItemController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  newsItemController.create)
router.get('/', newsItemController.getAll)
router.get('/:id', newsItemController.getOne);
router.put('/:id', checkRole('ADMIN'), newsItemController.edit);

router.delete('/:id',newsItemController.delete);


export default router;