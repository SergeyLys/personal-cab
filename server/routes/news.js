import express from 'express';
import * as NewsController from '../controllers/news';

const router = express.Router();

router.post('/news', NewsController.create);
router.get('/news', NewsController.getAll);
router.get('/news/:url', NewsController.getOne);

export default router;