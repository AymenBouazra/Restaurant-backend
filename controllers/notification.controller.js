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

exports.readAllNotifications = async (req, res) => {
    try {
        Notification.find().then((response) => {
            response.map(async (notification) => {
                await Notification.findByIdAndUpdate(notification._id, { read: true }, { new: true })
            })
        })
        res.json({ message: 'All notifications read!' })

    } catch (error) {
        res.status(500).json({ message: 'Server error!' })
    }
}

exports.deleteAllNotifications = async (req, res) => {
    try {
        Notification.find().then((response) => {
            response.map(async (notification) => {
                await Notification.findByIdAndDelete(notification._id)
            })
        }).catch((error) => {
            res.status(400).json({ message: 'Error ' })
        })
        res.json({ message: 'All notifications deleted!' })
    } catch (error) {
        res.status(500).json({ message: 'Server error!' })
    }
}