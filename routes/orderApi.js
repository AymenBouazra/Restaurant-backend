const express = require('express');
const router = express.Router()
const { makeOrder, orderList, confirmOrder } = require('../controllers/order.controller');

router.post('/order', makeOrder);
router.get('/order', orderList);
router.put('/order/:id', confirmOrder);

module.exports = router;