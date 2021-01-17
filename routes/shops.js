const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

// GET users listing. 
router.post('/create', shopController.create);
router.get('/getAllShopData', shopController.getAll);
router.get('/:id', shopController.getById);
router.put('/update/:id', shopController.updateById);
//router.delete('/:id', shopController.deleteById);

module.exports = router; 