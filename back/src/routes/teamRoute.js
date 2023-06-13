const express = require("express");

const teamController = require("../controller/teamController");

const router = express.Router();

router.get("/getpage", teamController.getTeampage);
module.exports = router;
