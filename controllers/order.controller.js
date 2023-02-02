const Order = require('../models/order');

exports.makeOrder = async (req, res) => {
    try {
        await Order.create(req.body)
        res.json({ message: 'Order sent to chef successfully, thanks for trying our service!' })
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}