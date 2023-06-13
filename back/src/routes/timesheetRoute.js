const express = require("express");

const timesheetController = require("../controller/timesheetController");

const router = express.Router();

router.post("/addtimesheet", timesheetController.addtimesheet);
module.exports = router;
