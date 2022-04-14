const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://RAJA:rajazain786@cluster0.wjy1u.mongodb.net/MERN-PIZZA';
mongoose.connect(mongoURL);

const db = mongoose.connection
db.on('connected', () => {
    console.log('MongoDB connection is successful');
})

db.on('error', () => {
    console.log('MongoDB connection is failed');
})

module.exports = mongoose;