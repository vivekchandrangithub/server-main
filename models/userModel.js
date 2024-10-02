const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    mobile: Number,
    image: {
        type: String, 
        default: '',  
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
