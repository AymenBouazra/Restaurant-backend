const express = require('express');
const { makeOrder } = require('../controllers/order.controller');
const router = express.Router()

router.post('/order', makeOrder);

module.exports = router;