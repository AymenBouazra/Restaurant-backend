const mongoose = require('mongoose')
const local = 'mongodb://127.0.0.1:27017/restaurant'
const devolpment = 'mongodb+srv://cv-generator:cv123456@mydatabase.8vzuo.mongodb.net/restaurant'
mongoose.set('strictQuery', false);
mongoose.connect(devolpment).then(success => {
    console.log('Successfuly connected to database');
}).catch(error => {
    console.log('error connecting to database');
})