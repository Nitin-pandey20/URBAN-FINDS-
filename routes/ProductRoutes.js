import express from 'express';
import {
    CreateProductController,
    getsingleproductController,
    deleteproductController,
    productphotoController,
    getProductController,
    updateproductController,
    productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    relatedProductController,
    productCategoryController,
    brainTreePaymentController,
    braintreeTokenController,
} from "../controllers/ProductController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable';
const router = express.Router()

//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    CreateProductController
);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getsingleproductController);
router.get("/product-photo/:pid", productphotoController);
router.delete("/delete-product/:pid", deleteproductController);
router.put("/update-product/:pid",
    requireSignIn, isAdmin, formidable(), updateproductController);
router.post("/product-filters", productFiltersController)
router.get("/product-count", productCountController);
router.get("/product-list/:page", productListController);
router.get("/search/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", relatedProductController);
router.get("/product-category/:slug", productCategoryController);
router.get("/braintree/token", braintreeTokenController);
router.post('/braintree/payment', requireSignIn, brainTreePaymentController,)
export default router; 