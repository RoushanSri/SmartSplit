import express from 'express';
import { editBill, extractText, pastSplits, splitBill } from '../controllers/spilt.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.post('/addBill',isAuthenticated, splitBill);
router.put('/editBill', isAuthenticated, editBill);
router.post('/extract', isAuthenticated, upload.single('bill'), extractText);
router.get('/pastEvents', isAuthenticated, pastSplits);

export default router