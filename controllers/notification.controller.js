const Notification = require('../models/notification')

exports.deleteNotification = async (req, res) => {
    try {
        await Notification.findByIdAndDelete(req.params.id)
        res.json({ message: 'Notification deleted!' })

    } catch (error) {
        res.status(500).json({ message: 'Server error!' })
    }
}
exports.readNotification = async (req, res) => {
    try {
        await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
        res.json({ message: 'Notification read!' })

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