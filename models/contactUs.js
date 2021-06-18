const mongoose = require('mongoose')
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email:{
        type: Array,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('contactUs', formSchema)