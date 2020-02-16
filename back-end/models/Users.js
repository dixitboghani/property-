const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const UserSchema = new mongoose.Schema({

    
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Number,
        default: moment().unix()
    }
})

UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
}

UserSchema.methods.validPassword = (password,hash) => {
    
    return bcrypt.compareSync(password, hash);
}

module.exports = mongoose.model('User', UserSchema)