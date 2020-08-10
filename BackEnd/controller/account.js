const Account = require('../models/account');


// TODO: input validation using express-validator
module.exports.newAccount = (req,res)=>{
    const newAccount = new Account(req.body);
    newAccount.save((err,account)=>{
          if(err) res.json({error:'error while saving data in db :'+ err});
         return res.json({account});
    })     
}

module.exports.getByAccountNumber = (req,res)=>{
      
}