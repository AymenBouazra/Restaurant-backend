const express = require('express');
const router = express.Router();
const { deleteNotification, getAllNotification, readNotification, readAllNotifications, deleteAllNotifications } = require('../controllers/notification.controller');

router.delete('/notification/:id', deleteNotification)
router.put('/notification/:id', readNotification)
router.get('/notification', getAllNotification)
router.put('/allNotifications', readAllNotifications)
router.delete('/deleteAllNotifications', deleteAllNotifications)

module.exports = router