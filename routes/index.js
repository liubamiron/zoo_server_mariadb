import { Router } from 'express';
const router = Router();

import userRouter from './userRouter.js';
import typeTenderRouter from './typeTenderRouter.js';
import typeRouter from './typeRouter.js';
import tenderRouter from './tenderRouter.js';
import tagRouter from './tagRouter.js';
import postRouter from './postRouter.js';
import newsItemRouter from './newsItemRouter.js';
import homePageRouter from './homePageRouter.js';
import eventRouter from './eventRouter.js';
import animalRouter from './animalRouter.js';
import faqRouter from './faqRouter.js';
import reviewRouter from './reviewRouter.js';
import emailRouter from './emailRouter.js';
import weekHoursRouter from './weekHoursRouter.js';
import activitiesItemRouter from './activitiesItemRouter.js';

router.use('/user', userRouter);
router.use('/type_tender', typeTenderRouter);
router.use('/type', typeRouter);
router.use('/tender', tenderRouter);
router.use('/tag', tagRouter);
router.use('/post', postRouter);
router.use('/news_item', newsItemRouter);
router.use('/home_page', homePageRouter);
router.use('/event', eventRouter);
router.use('/animal', animalRouter);
router.use('/activities_item', activitiesItemRouter);
router.use('/faq', faqRouter);
router.use('/review', reviewRouter);
router.use('/email', emailRouter);
router.use('/week_hours', weekHoursRouter);

export default router;
