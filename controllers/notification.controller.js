const Notification = require('../models/notification')

exports.deleteNotification = async (req, res) => {
    try {
        await Notification.findByIdAndDelete(req.params.id)
        res.json({ message: 'Notification deleted!' })

    } catch (error) {
        res.status(500).json({ message: 'Server error!' })
    }
}

exports.getAllNotification = async (req, res) => {
    try {
        const notif = await Notification.find()
        res.json(notif)
    } catch (error) {
        res.status(500).json({ message: 'Server error!' })
    }
}