const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        cartItems: [],
        cartTotalAmount: Number,
        cartTotalQuantity: Number
    },
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('order', orderSchema, 'order')