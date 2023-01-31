const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    numTable: String,
    // more to write 
},
    {
        timestamps: true, versionKey: false
    })

module.exports = mongoose.model('order', orderSchema, 'order')