const mongoose = require('mongoose')
const notification = new mongoose.Schema(
    {
        title: String,
        description: String,
        orderNumber: Number,
        read: { type: Boolean, default: false },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: '2d'
        }
    },
    {
        timestamps: true, versionKey: false
    }
)
module.exports = mongoose.model('notification', notification)