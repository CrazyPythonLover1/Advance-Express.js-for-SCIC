const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop)
}

module.exports.getAll = () => {
    return Shop.find({})
}

module.exports.getById = (id) => {
    return Shop.findById(id)
}


module.exports.updateById = (id, updatedShop) => {
    return Shop.findByIdAndUpdate(id, updatedShop)
}