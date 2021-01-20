const User = require("../models/User.model");

module.exports.createUser = (userinfo) => {
    return User.create(userinfo);
}