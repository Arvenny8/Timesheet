const { Project } = require("../models");
const { EmployeeProjectRelation } = require("../models");

exports.addproject = async (req, res, next) => {
    const project = req.body;
    console.log(req.body);
    await Project.create(project);
    res.status(201).json({ msg: "create project" });
};

exports.getProject = async (req, res, next) => {
    const project = await Project.findAll();
    res.status(200).json({ project });
};
