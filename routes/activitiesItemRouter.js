import { Router } from 'express';
const router = new Router();
import activitiesItemController from '../controllers/activitiesItemController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  activitiesItemController.create)
router.get('/', activitiesItemController.getAll)
router.get('/:id', activitiesItemController.getOne);
router.put('/:id', checkRole('ADMIN'), activitiesItemController.edit);
router.delete('/:id',activitiesItemController.delete)

export default router;

