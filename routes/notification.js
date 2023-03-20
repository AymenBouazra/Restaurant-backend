const express = require('express');
const router = express.Router();
const { deleteNotification, getAllNotification } = require('../controllers/notification.controller');

router.delete('/notification/:id', deleteNotification)
router.get('/notification', getAllNotification)

module.exports = router