const { Project } = require("../models");
const { EmployeeProjectRelation } = require("../models");
const { Employee } = require("../models");

exports.addproject = async (req, res, next) => {
    const project = req.body;
    console.log(req.body);
    const newProject = await Project.create(project);
    await EmployeeProjectRelation.create({
        projectId: newProject.id,
        employeeId: req.body.employeeId,
    });
    res.status(201).json({ msg: "create project" });
};

exports.getProject = async (req, res, next) => {
    const project = await Project.findAll({
        include: {
            model: EmployeeProjectRelation,
            include: Employee,
        },
    });
    res.status(200).json({ project });
};
