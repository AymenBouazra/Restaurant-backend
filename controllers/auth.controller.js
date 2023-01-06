const Auth = require('../models/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req,res) => {
    try {
        const found = await Auth.findOne({email:req.body.email})
        if (found) {
            res.status(400).json({message:'User already exists'})
        }
        const salt = bcrypt.genSalt(10);
        bcrypt.hashSync(req.body.password,salt).then((hash)=> { req.body.password = hash})
        await Auth.create(req.body)
        res.json({message:'User registered successfully'})
    } catch (error) {
        res.status(500).json({message:error.message || 'Error server'})
    }
}

exports.login = async (req,res) => {
    try {
        const found = await Auth.findOne({email:req.body.email})
        if(found){
            
        }
    } catch (error) {
        res.status(500).json({message:error.message || 'Error server'})
    }
}