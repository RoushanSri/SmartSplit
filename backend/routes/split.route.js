import express from 'express';
import { editBill, splitBill } from '../controllers/spilt.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/addBill',isAuthenticated, splitBill);
router.put('/editBill', isAuthenticated, editBill);

export default router