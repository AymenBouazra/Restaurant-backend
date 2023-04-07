const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        cartItems: [],
        orderNumber: Number,
        table: Number,
        cartTotalAmount: Number,
        cartTotalQuantity: Number,
        status: { type: String, default: 'Pending' }
    },
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('order', orderSchema, 'order')