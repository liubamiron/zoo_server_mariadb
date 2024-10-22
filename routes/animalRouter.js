
import { Router } from 'express';
const router = new Router();
import animalController from '../controllers/animalController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';

router.post('/', checkRole('ADMIN'), animalController.create)
router.get('/', animalController.getAll)
router.get('/:id', animalController.getOne)
router.put('/:id', checkRole('ADMIN'), animalController.edit)

router.delete('/:id',animalController.delete)

export default router;
