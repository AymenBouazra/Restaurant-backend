const Order = require('../models/order');
const Notification = require('../models/notification')

exports.makeOrder = async (req, res) => {
    try {
        const count = await Order.countDocuments()
        req.body.orderNumber = count + 1
        await Order.create(req.body)
        await Notification.create({ title: 'Order number ' + count, description: 'Table number ' + req.body.table, orderNumber: count })
        res.json({ message: 'Order sent to chef successfully, thanks for trying our service!' })
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}
exports.orderList = async (req, res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}
exports.confirmOrder = async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id, { status: "Confirmed" }, { new: true })
        res.json({ message: 'Confirmed successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}