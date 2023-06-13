const { Project } = require("../models");

exports.addproject = async (req, res, next) => {
    const project = req.body;
    console.log(req.body);
    await Project.create(project);
    res.status(201).json({ msg: "create project" });
};

exports.getProjectByName = async (req, res, next) => {
    const projectname = req.body;
    console.log(req.body);
    await Project.findOne({ where: projectname });
    res.status(200).json({ msg: "find success" });
};
