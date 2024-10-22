
import { Router } from 'express';
const router = new Router();
import homePageController from '../controllers/homePageController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole('ADMIN'),  homePageController.create)
router.get('/', homePageController.getAll)
router.get('/:id', homePageController.getOne);
router.put('/:id', checkRole('ADMIN'), homePageController.edit);


router.delete('/:id',homePageController.delete)

export default router;
