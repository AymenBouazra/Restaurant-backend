const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName: String,
    description: String,
    priceMega: Number,
    priceGiga: Number,
    pricePeta: Number,
    priceTera: Number,
    category: String,
    photo: { type: String, default: 'https://i.imgur.com/lh8Sd5C.png' }
},
    {
        timestamps: true, versionKey: false
    })

module.exports = mongoose.model('food', foodSchema, 'food')