import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/getProfile', isAuthenticated, getProfile);

export default router;