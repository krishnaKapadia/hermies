import { Router } from "express";
import * as bcrypt from 'bcryptjs';
import { omit } from 'lodash';
var jwt = require('jsonwebtoken');
const passport = require('passport');
var _User = require("../Database/Models/User.ts");
var router = Router();

// Registration handler
router.post('/register', function (req, res) {
	if (req == null) {
		// return res.st('Request body was empty');
		return res.status(400);
	}

	_User.findOne({
		email: req.body.email
	}).then(function (user) {
		if (user) {
			return res.status(400);
		}
		console.log(user);
		console.log(req.body);

		let newUser = new _User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password
		});

		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				console.log("Error: " + err, newUser);
			} else {
				bcrypt.hash(newUser.password, salt, function (err, hash) {
					if (err) {
						console.log("Error: " + err, newUser);
					} else {
						newUser.password = hash;
						newUser.save().then(function (user) {
							return res.json(user);
						});
					}
				});
			}
		});
	});
});

// Login handler
router.post('/login', (req, res) => {
	const payload = req.body;
	const email = payload.email;
	const password = payload.password;

	_User.findOne({ email }).then((user) => {
		if(!user) {
			return res.status(404).json({ error: 'User not found' });
		}

	//	Check if supplied password is what is stored
		bcrypt.compare(password, user.password).then(match => {
			if (match) {
				// const payload = omit(user, 'password');
				jwt.sign({ email: user.email, password: user.password }, 'secret', {
					expiresIn: 3600
				}, (err, token) => {
					if(err) {
						console.log('Error: ', err);
					} else {
						res.json({
							success: true,
							token: `Bearer ${token}`
						});
					}
				});
			} else {
				return res.status(400).json('Incorrect Password');
			}
		})
	})
});

// Authenticated route handler
router.get('/me',
	passport.authenticate('jwt', { session: false }), (req, res) => {
		return res.json({
			id: req.user.id,
			firstName: req.user.firstName,
			lastName: req.user.lastName,
			email: req.user.email
		});
	}
);

module.exports = router;