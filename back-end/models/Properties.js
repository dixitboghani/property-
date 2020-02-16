const mongoose = require('mongoose');


const model = new mongoose.Schema({

    image_url: {
        type: String,
        default: ''
    },
    pr_name: {
        type: String,
        default: ''
    },
    pr_desc: {
        type: String,
        default: ''
    },
    pr_price: {
        type: String,
        default: ''
    },
    pr_size: {
        type: String,
        default: ''
    },
    
})


module.exports = mongoose.model('property', model)