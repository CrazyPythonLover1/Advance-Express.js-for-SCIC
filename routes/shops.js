const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

// GET users listing. 
router.post('/', shopController.create);
router.get('/getAllShopData', shopController.getAll);
//route.get('/:id', shopController.getById);
//route.put('/:id', shopController.updateById);
//route.delete('/:id', shopController.deleteById);

module.exports = router; 