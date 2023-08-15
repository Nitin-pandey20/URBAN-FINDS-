import express from "express";
import { isAdmin } from "../middlewares/authMiddleware.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
    CreateCategoryController, updateCategoryController
    , categoryController, singlecategoryController, deletecategoryController
} from "../controllers/categoryController.js";
const router = express.Router();
//routes

router.post('/create-category', requireSignIn,
    isAdmin, CreateCategoryController);
router.put('/update-category/:id',
    requireSignIn, isAdmin, updateCategoryController);

router.get('/get-category', categoryController);

router.get('/single-category/:slug', singlecategoryController);
router.delete('/delete-category/:id', requireSignIn, isAdmin, deletecategoryController);

export default router 