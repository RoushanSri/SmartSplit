import express from 'express';
import { splitBill } from '../controllers/spilt.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/addBill',isAuthenticated, splitBill);

export default router