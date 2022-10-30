const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'active',
        required: true
    },
    createdAt: {
        type: Number
    },
    UpdatedAt: {
        type: Number
    }
},
{
    timestamps: {
        currentTime: ()=> Math.floor(Date.now()/1000)
    }
})

exports.User = mongoose.model('User', UserSchema)


