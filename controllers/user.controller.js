const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.isAuthenticated = async (req, res, next) => {
	try {
		const verified = await jwt.verify(
			req.headers.token,
			process.env.JWT_SECRET
		);
		
		if (!verified) {
			return res.
				status(400).
				json({
					error: true,
					data: null,
					token: null,
					message: 'user not authenticated'
				});
		}
		next();
	} catch (e) {
		console.error(e);
		return res.
			status(500).
			json({
				error: e.message,
				data: null,
				token: null,
				message: 'Something went wrong'
			});
	}
};

const hashPassword = (password, saltRound) => new Promise((resolve, reject) => {
	bcrypt.hash(
		password,
		saltRound,
		(err, hash) => {
			if (err) {
				reject(err);
			}
			resolve(hash);
		}
	);
});

module.exports.register = async (req, res) => {
	try {
		const {body} = req,
			saltRound = 10;
		body.password = await hashPassword(
			body.password,
			saltRound
		);
		const user = await userService.createUser(body), // BSON data will come form mongoDB
			userObj = JSON.parse(JSON.stringify(user)); // BSON data convert into JSON then JSON turn into JS object
		delete userObj.password;

		const token = await jwt.sign(
			{
				data: userObj
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '24h'
			}
		);

		return res.
			status(200).
			json({
				error: false,
				data: null,
				token,
				message: 'registration completed'
			});

	} catch (e) {
		console.error(e);
		return res.
			status(500).
			json({
				error: e,
				data: null,
				token: null,
				message: 'something went wrong'

			});
	}
};


const comparePassword = (password, hash) => new Promise((resolve, reject) => {
	bcrypt.compare(
		password,
		hash,
		(err, match) => {
			if (err) {
				reject(err);
			}
			resolve(match);
		}
	);
});

module.exports.login = async (req, res) => {
	try {
		const user = await userService.findUserByEmail(req.body.email),
			matchPassword = await comparePassword(
				req.body.password,
				user.password
			);
		if (!matchPassword) {
			return res.
				status(400).
				json({
					error: false,
					data: null,
					token: null,
					message: ' User Credential didn\'t match'
				});
		}
		const userObj = JSON.parse(JSON.stringify(user));
		delete userObj.password;

		const token = await jwt.sign(
			{
				data: userObj
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '24h'
			}
		);

		return res.
			status(200).
			json({
				error: false,
				data: null,
				token,
				message: 'login successful'
			});

	} catch (e) {
		return res.
			status(500).
			json({
				error: e,
				data: null,
				token: null,
				message: 'Something went wrong'
			});
	}
};