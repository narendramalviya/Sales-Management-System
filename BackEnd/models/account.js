const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId
const AccountSchema =  mongoose.Schema({
    accountNo:{
        type:Number,
        require:true,
        unique:true
    },
    balance:{
        type:Number,
        default:0
    },
    user:{
        type:ObjectId,
        ref:'User',
    },
    accountStatement:[{
        type:ObjectId,
        ref:'AccountStatement'
    }]
});

module.exports = new mongoose.model('Account',AccountSchema);
