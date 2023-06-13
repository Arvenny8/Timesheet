const { Employee } = require("../models");

exports.getEmployeeByEmail = (email) =>
    Employee.findOne({
        where: { email: email },
    });
exports.createEmployee = (employee) => Employee.create(employee);
