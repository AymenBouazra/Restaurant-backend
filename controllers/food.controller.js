const Food = require('../models/food');
const fs = require('fs');
const path = require('path');
exports.getAllFood = async (req, res) => {
    try {
        const food = await Food.find();
        res.json(food)
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}

exports.getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        res.json(food)
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}

exports.createFood = async (req, res) => {
    try {
        const foodExist = await Food.findOne({ foodName: req.body.foodName })
        if (foodExist) {
            res.status(400).json({ message: 'Food already exists with this name!' })
        } else {
            req.body.photo = 'http://localhost:4000/uploads/' + req.file.filename
            await Food.create(req.body);
            res.json({ message: 'Food created successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}

exports.updateFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (req.file) {
            req.body.photo = 'http://localhost:4000/uploads/' + req.file.filename
            const fileName = path.basename(food.photo);
            const filePath = path.resolve('./uploads', fileName);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        await Food.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: 'Food updated successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}

exports.deleteFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);

        const fileName = path.basename(food.photo);
        const filePath = path.resolve('./uploads', fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        await Food.findByIdAndDelete(req.params.id);
        res.json({ message: 'Food deleted successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message || 'Server error!' })
    }
}