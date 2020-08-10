const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {createNewAccount} = require('./routes/account');


const app = express();
// database connnection
mongoose.connect('mongodb://localhost/SalesManager',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connnection error:'));
db.once('open',function(){
	console.log('db connected!');
})
// ---------------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
	res.json({msg:"Hello World!"});
});

// routes
app.use('/api',createNewAccount)

app.listen(7000, (err) => {
	if (err) console.log(err);
	console.log("server runnning at port 7000 ...");
});


/*
routes:
 -> accounts 
  1. get all accounts
  2. get account by a/c no .
  3. deposit by ac no.
  4. debit by ac no.
sales:
  1.sale item by category 

stock:
  1. Add stock by category
  2. Add stock category

  

*/