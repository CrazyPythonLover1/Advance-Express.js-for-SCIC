const shopService = require('../services/shop.service');

// create data for shop
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// get all data from shop collection
module.exports.getAll = async (req, res, next) => {
    try {
        const AllShopData = await shopService.getAll();
        return res.status(200).json(AllShopData);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// find one data by Id
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const getShopById = await shopService.getById(id);
        return res.status(200).json(getShopById);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// find Id and update shop
module.exports.updateById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const getUpdatedShop = await shopService.updateById(id, req.body);
        return res.status(200).json(req.body);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Delet Shop by Id
module.exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id
        const getDeletedData = await shopService.deleteById(id);
        return res.status(200).json(getDeletedData);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}