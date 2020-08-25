const express = require("express");
const router = express.Router();
const { signup,signin } = require("../controllers/auth");
const { body } = require("express-validator");
router.post(
	"/signup",
	[
		body("name").isLength({ min: 2, max: 32 }).isString(),
        body("email").isEmail(),
        body('phone').isLength({min:10,max:12}),
        body('password').isLength({min:3})
	],
	signup
);

router.post('/signin',[
	body("email").isEmail(),
	body("password").isLength({min:3})
],signin);

module.exports = router;
