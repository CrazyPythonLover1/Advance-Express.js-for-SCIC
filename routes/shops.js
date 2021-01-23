const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');
const { shopValidator } = require('../middlewares/shop.validator');
const { checkInvalid } = require('../middlewares/validationResult');


// GET users listing. 
router.post('/create', shopValidator, checkInvalid, shopController.create);
router.get('/getAllShopData', shopController.getAll);
router.get('/:id', shopController.getById);
router.put('/update/:id', userController.isAuthenticated, shopController.updateById);
router.delete('/delete/:id', userController.isAuthenticated, shopController.deleteById);

module.exports = router; 