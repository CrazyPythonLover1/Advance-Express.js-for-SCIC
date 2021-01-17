const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const AllShopData = await shopService.getAll();
        return res.status(200).json(AllShopData);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
}