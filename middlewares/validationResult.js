const { validationResult } = require('express-validator');

module.exports.checkInvalid = function( req, res, next ) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        return res.status(400).json({message: errors });
    }
}