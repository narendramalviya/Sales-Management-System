const mongoose = require('mongoose');
const Schema = mongoose.Schema
const account = new Schema({
    accountNo:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastName:String,
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

module.exports =  mongoose.model('account',account);