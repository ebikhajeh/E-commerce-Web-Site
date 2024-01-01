const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');
const ordersController = require('../controllers/ordersController');
const orderDetailsController = require('../controllers/orderDetailsController');
const paymentsController = require('../controllers/paymentsController');
const shippingDetailsController = require('../controllers/shippingDetailsController');
const reviewsController = require('../controllers/reviewsController');
const shoppingCartController = require('../controllers/shoppingCartController');
const wishListController = require('../controllers/wishListController');
const addressesController = require('../controllers/addressesController');

// User Routes
router.post('/login', usersController.loginUser);
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Product Routes
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

// Category Routes
router.get('/categories', categoriesController.getAllCategories);
router.get('/categories/:id', categoriesController.getCategoryById);
router.post('/categories', categoriesController.createCategory);
router.put('/categories/:id', categoriesController.updateCategory);
router.delete('/categories/:id', categoriesController.deleteCategory);

// Orders Routes
router.get('/orders', ordersController.getAllOrders);
router.get('/orders/:id', ordersController.getOrderById);
router.post('/orders', ordersController.createOrder);
router.put('/orders/:id', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);

// Order Details Routes
router.get('/orderdetails', orderDetailsController.getAllOrderDetails);
router.get('/orderdetails/:id', orderDetailsController.getOrderDetailById);
router.post('/orderdetails', orderDetailsController.createOrderDetail);
router.put('/orderdetails/:id', orderDetailsController.updateOrderDetail);
router.delete('/orderdetails/:id', orderDetailsController.deleteOrderDetail);

// Payment Routes
router.get('/payments', paymentsController.getAllPayments);
router.get('/payments/:id', paymentsController.getPaymentById);
router.post('/payments', paymentsController.createPayment);
router.put('/payments/:id', paymentsController.updatePayment);
router.delete('/payments/:id', paymentsController.deletePayment);

// Shipping Details Routes
router.get('/shipping', shippingDetailsController.getAllShippingDetails);
router.get('/shipping/:id', shippingDetailsController.getShippingDetailById);
router.post('/shipping', shippingDetailsController.createShippingDetail);
router.put('/shipping/:id', shippingDetailsController.updateShippingDetail);
router.delete('/shipping/:id', shippingDetailsController.deleteShippingDetail);

// Review Routes
router.get('/reviews', reviewsController.getAllReviews);
router.get('/reviews/:id', reviewsController.getReviewById);
router.post('/reviews', reviewsController.createReview);
router.put('/reviews/:id', reviewsController.updateReview);
router.delete('/reviews/:id', reviewsController.deleteReview);

// Shopping Cart Routes
router.get('/shoppingcart', shoppingCartController.getAllCartItems);
router.get('/shoppingcart/:id', shoppingCartController.getCartItemById);
router.post('/shoppingcart', shoppingCartController.addCartItem);
router.put('/shoppingcart/:id', shoppingCartController.updateCartItem);
router.delete('/shoppingcart/:id', shoppingCartController.removeCartItem);
router.get('/shoppingcartt/user', verifyToken, shoppingCartController.getUserCart);


// WishList Routes
router.get('/wishlists', wishListController.getAllWishItems);
router.get('/wishlist', verifyToken, wishListController.getUserWishList);
router.get('/wishlist/:id', wishListController.getWishItemById);
router.post('/wishlist', wishListController.addWishItem);
router.put('/wishlist/:id', wishListController.updateWishItem);
router.delete('/wishlist/:id', wishListController.removeWishItem);

// Address Routes
router.get('/addresses', addressesController.getAllAddresses);
router.get('/addresses/:id', addressesController.getAddressById);
router.post('/addresses', addressesController.createAddress);
router.put('/addresses/:id', addressesController.updateAddress);
router.delete('/addresses/:id', addressesController.deleteAddress);

module.exports = router;
