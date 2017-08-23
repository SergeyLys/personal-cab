import express from 'express';
import * as AddonsController from '../controllers/addons';

const router = express.Router();

// router.post('/news', AddonsController.create);
router.get('/addons', AddonsController.getAll);
// router.get('/news/:url', AddonsController.getOne);

export default router;