const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

// GET users listing. 
router.post('/', shopController.create);

module.exports = router; 