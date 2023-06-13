const employeeRepository = require("../repositories/employeeRepository");

exports.checkEmailExist = async (email) => {
    const existEmployee = await employeeRepository.getEmployeeByEmail(email);
    return !!existEmployee;
};

exports.createEmployee = (employee) =>
    employeeRepository.createEmployee(employee);
exports.getEmployeeByEmail = async (email) => {
    const employee = await employeeRepository.getEmployeeByEmail(email);
    return employee;
};

exports.getEmployeeById = (id) => employeeRepository.getEmployeeById(id);
