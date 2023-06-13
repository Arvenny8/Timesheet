const { Timesheet } = require("../models");

exports.addtimesheet = async (req, res, next) => {
    const timesheet = req.body;
    console.log(req.body);
    await Timesheet.create(timesheet);
    res.status(201).json({ msg: "create timesheet" });
};
