const Auth = require('../models/auth')


exports.register = async (req,res) => {
    try {
        const found = await Auth.findOne({email:req.body.email})
        if (found) {
            res.status(400).json({message:'User already exists'})
        }
        await Auth.create(req.body)
        res.json({message:'User registered successfully'})
    } catch (error) {
        res.status(500).json({message:error.message || 'Error server'})
    }
}

exports.login = async (req,res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message:error.message || 'Error server'})
    }
}