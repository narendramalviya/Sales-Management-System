const express = require('express');
const {newAccount} = require('../controller/account');

const router = express.Router();

exports.createNewAccount = router.post('/create-account',newAccount);