const { validationResult } = require('express-validator');

module.exports.checkInvalid = function( req, res, next ) {
	let errors = validationResult(req);

	if (errors.isEmpty()) {
		return next();
	} else {
		const errMsg = errors.array().map(el => `${el.param} ${el.msg}`);
		return res.status(400).json({message: errMsg });
	}
};