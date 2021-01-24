module.exports.user = function(req,res,next) {
	console.log('METHOD', req.method);
	next();
};
module.exports.second = function(req, res, next) {
	return res.json({
		username: 'CrazyPythonLover1',
		name: 'MD Mainul Islam'
	});
};