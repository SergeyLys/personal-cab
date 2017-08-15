import express from 'express';
import * as authController from '../controllers/auth';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

export default router;