const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop)
}

module.exports.getAll = () => {
    return Shop.find({})
}