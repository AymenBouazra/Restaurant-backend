const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://cv-generator:cv123456@mydatabase.8vzuo.mongodb.net/e-commerce-app').then(success=>{
    console.log('Successfuly connected to database');
}).catch(error=>{
    console.log('error connecting to database');
})