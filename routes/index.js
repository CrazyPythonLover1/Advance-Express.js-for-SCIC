const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/middlewares');

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.render('index', { title: 'Express' });
	return res.send('hello world');
});

router.get('/userinfo', middleware.user, middleware.second);


module.exports = router;
