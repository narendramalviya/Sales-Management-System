const mongoose = require("mongoose");
const crypto = require('crypto');
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
			trim: true,
			max: 32,
		},
		email: {
			type: String,
			trim: true,
			require: true,
			unique: true,
			lowercase: true,
		},
		phone:{
			type:String,
			require:true,
			max:13
		},
		hashed_password: {
			type: String,
			require: true,
		},
		salt: String,
		role: {
			type: String,
			default: "subscriber",
		},
		resetPasswordLink: {
			data: String,
			default: "",
		},
	},
	{ timestamps: true }
);

userSchema
	.virtual("password")
	.set(function (password) {
		//  create temporery variable called _password
		this._password = password;
		//  genrate salt
		this.salt = this.makeSalt();
		// encryptPassword
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function () {
		return this._password;
	});

userSchema.methods = {
	makeSalt: function () {
		return Math.round(new Date().valueOf() * Math.random()) + "";
	},
	encryptPassword: function (password) {
		if (!password) return "";
		try {
			return crypto
				.createHmac("sha1", this.salt)
				.update(password)
				.digest("hex");
		} catch(err){
			return '';
		}
	},
	authenticate:function(plainText){
		return this.encryptPassword(plainText) === this.hashed_password;
	}
};

module.exports = mongoose.model('User',userSchema);