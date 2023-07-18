const createError = require("../util/createError");
const {
    validateRegister,
    validateLogin,
} = require("../validator/authValidator");
const employeeService = require("../service/employeeService");
const tokenService = require("../service/tokenService");
const bcryptService = require("../service/bcryptService");

exports.register = async (req, res, next) => {
    try {
        const value = validateRegister(req.body);
        const isUserExist = await employeeService.checkEmailExist(value.email);
        if (isUserExist) {
            createError("email address already in use", 400);
        }

        value.password = await bcryptService.hash(value.password);
        const employee = await employeeService.createEmployee(value);

        const accessToken = tokenService.sign({ id: employee.id });
        res.status(200).json({ accessToken });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const value = validateLogin(req.body);
        const employee = await employeeService.getEmployeeByEmail(value.email);
        if (!employee) {
            createError("invalid credential", 400);
        }
        const isCorrect = await bcryptService.compare(
            value.password,
            employee.password
        );
        if (!isCorrect) {
            createError("invalid credential", 400);
        }
        const accessToken = tokenService.sign({ id: employee.id });
        res.status(200).json({ accessToken });
    } catch (error) {
        next(error);
    }
};

exports.getMe = (req, res, next) => {
    res.status(200).json({ user: req.user });
};
