const User = require("../models/user");
const { validationResult } = require("express-validator");
const user = require("../models/user");
exports.signup = (req, res) => {
	const checkError = validationResult(req);
	if (!checkError.isEmpty()) {
		// console.log(checkError.errors[0]);
		return res.json({
			error: "some error occurs:" + JSON.stringify(checkError.errors[0]),
		});
	}

	const user = new User(req.body);
	user.save((error, user) => {
		if (error)
			return res.json({
				error: `Some error occured :${error}`,
			});

		const { name, email, phone, role } = user;
		res.json({
			user: {
				name: name,
				email: email,
				phone: phone,
				role: role,
			},
		});
	});
};

exports.signin = (req, res) => {
	const checkError = validationResult(req);
	if (!checkError.isEmpty()) {
		// console.log(checkError.errors[0]);
		return res.json({
			error: "some error occurs:" + JSON.stringify(checkError.errors[0]),
		});
	}
	User.findOne({ email: req.body.email }, (error, user) => {
		if (error) {
			return res.json({
				error: `user not found! :${error}`,
			});
		}
		if (user.authenticate(req.body.password) === true) {
			return res.json({ msg: "signed in!" ,user:user});
		} else return res.json({ msg: "invalid password!" });
		
	});
};
