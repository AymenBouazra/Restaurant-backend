const Order = require('../models/order');
const Notification = require('../models/notification')

exports.makeOrder = async (req, res) => {
    try {
        await Order.create(req.body)
        const count = await Order.countDocuments()
        await Notification.create({ title: 'Order number ' + count, description: 'Table number ' + req.body.table, orderNumber: count })
        res.json({ message: 'Order sent to chef successfully, thanks for trying our service!' })
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}