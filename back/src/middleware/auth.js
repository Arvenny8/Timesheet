const createError = require("../util/createError");
const tokenService = require("../service/tokenService");
const { Employee } = require("../models");

module.exports = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        console.log(authorization);
        if (!authorization || !authorization.startsWith("Bearer")) {
            createError("You are unauthorized GAGGO", 401);
        }
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            createError("You are unauthorized BOBO", 401);
        }
        const payload = tokenService.verify(token);
        console.log(payload);
        const user = await Employee.findOne({
            where: {
                id: payload.id,
            },
        });
        if (!user) {
            createError("You are unauthorized", 401);
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};
