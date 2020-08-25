const mongoose = require("mongoose");

const AccountStatement = mongoose.Schema({
	date: {
		type: Date,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	type: {
		type: String,
		require: true,
	},
	amount: {
		type: Number,
		require: true,
	},
	balance: {
		type: Number,
		require: true,
	},
});

module.exports = new mongoose.model('AccountStatement',AccountStatement);

