const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema(
    {
        name: String,
        nameText: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('role', roleSchema, 'role')