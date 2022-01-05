const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.delete('/delete', shopController.postCartDeleteProduct);

router.post('/order', shopController.postOrder);
router.get('/order', shopController.getOrders);
module.exports = router;
