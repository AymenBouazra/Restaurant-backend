const User = require('../models/auth');

exports.getAllUsers = async(req,res) => {
    try {
        const Users = await User.find();
        res.json(Users)
    } catch (error) {
        res.status(500).json({message: error.message || 'Server error!'})
    }
}

exports.getUserById = async(req,res) => {
    try {
        const user = await User.findById(req.params.id,{password:0});
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message || 'Server error!'})
    }
}

exports.createUser = async(req,res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (userExist) {
            res.status(400).json({message:'User already exists with this e-mail address!'})
        } else {
            await User.create(req.body);
        res.json({message:'User created successfully'})
        }
    } catch (error) {
        res.status(500).json({message: error.message || 'Server error!'})
    }
}

exports.updateUserById = async(req,res) => {
    try {
        await User.find(req.params.id, req.body);
        res.json({message:'User updated successfully'})
    } catch (error) {
        res.status(500).json({message: error.message || 'Server error!'})
    }
}

exports.deleteUserById = async(req,res) => {
    try {
        const Users = await User.findByIdAndDelete(req.params.id);
        res.json({message:'User deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message || 'Server error!'})
    }
}