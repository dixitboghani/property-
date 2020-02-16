const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const UserSchema = new mongoose.Schema({

    
    user_id: {
        type: String,
        default: ''
    },
    token: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Number,
        default: moment().unix()
    }
})


module.exports = mongoose.model('UserSessions', UserSchema)