const { Employee } = require("../models");

exports.getTeampage = async (req, res, next) => {
    const employee = await Employee.findAll({
        attributes: {
            exclude: [
                "password",
                "updatedAt",
                "createdAt",
                "EmployeeProjectRelationId",
                "TimesheetId",
            ],
        },
    });
    res.status(200).json({ employee });
};
