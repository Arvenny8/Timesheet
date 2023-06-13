const jwt = require("jsonwebtoken");

exports.sign = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRETKEY, {
        expiresIn: process.env.JWT_EXPIREIN,
    });

exports.verify = (token) => jwt.verify(token, process.env.JWT_SECRETKEY);
