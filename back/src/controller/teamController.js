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

exports.deleteById = async (req, res, next) => {
    const item = req.params; // {id: 5}
    const emp = await Employee.findOne({
        where: { id: item.id },
    });

    if (!emp) {
        return res.status(400).json({ message: "employee not fonud" });
    }

    await emp.destroy();
    res.status(200).json({ item });
};

exports.updateById = async (req, res, next) => {
    const item = req.params;
    const body = req.body;
    const emp = await Employee.findOne({
        where: { id: item.id },
    });

    if (!emp) {
        return res.status(400).json({ message: "update not success" });
    }

    await Employee.update(body, { where: { id: item.id } });
    res.status(200).json({ msg: "update done" });
};
