const Joi = require("joi");
const validate = require("./validator");

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),

    lastName: Joi.string().trim().required(),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    }),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),

    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .trim()
        .required()
        .strip(),
    salary: Joi.number().required(),
    role: Joi.string().trim().required(),
    phone: Joi.string(),
    address: Joi.string(),
    gender: Joi.string(),
    birthday: Joi.string(),
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

exports.validateRegister = validate(registerSchema);
exports.validateLogin = validate(loginSchema);
