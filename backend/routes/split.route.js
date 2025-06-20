import express from 'express';
import { editBill, extractText, splitBill } from '../controllers/spilt.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.post('/addBill',isAuthenticated, splitBill);
router.put('/editBill', isAuthenticated, editBill);
router.post('/extract', isAuthenticated, upload.single('bill'), extractText);

export default router