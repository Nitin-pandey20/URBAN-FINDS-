import express from 'express';
import {
    registerController, loginController,
    testController, forgotPasswordController,
    updateProfileController,
    getOrdersController,
    orderStatusController,
    getAllOrdersController,
} from '../controllers/authcontroller.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router();
//routing
//register || method post
router.post('/register', registerController);

//login||post
router.post('/login', loginController);
//forgot password
router.post('/forgot-password', forgotPasswordController);
//test routes
router.get('/test', requireSignIn, isAdmin, testController);
//protected routes authentication
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
//protected routes for admin
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});
router.put('/profile', requireSignIn, updateProfileController)

router.get('/orders', requireSignIn, getOrdersController);
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//order status update
router.put('/order-status/orderId', requireSignIn, isAdmin, orderStatusController);
export default router;
