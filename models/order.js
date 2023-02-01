const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        numTable: String,
        foods: [{
            size: String,
            foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'food' },
            price: Number
        }],
        totalPrice: Number
    },
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('order', orderSchema, 'order')