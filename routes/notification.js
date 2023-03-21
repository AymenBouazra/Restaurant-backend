const express = require('express');
const router = express.Router();
const { deleteNotification, getAllNotification, readNotification } = require('../controllers/notification.controller');

router.delete('/notification/:id', deleteNotification)
router.put('/notification/:id', readNotification)
router.get('/notification', getAllNotification)

module.exports = router