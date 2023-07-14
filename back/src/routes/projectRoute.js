const express = require("express");

const projectController = require("../controller/projectController");

const router = express.Router();

router.post("/addproject", projectController.addproject);
router.get("/getproject", projectController.getProject);
module.exports = router;
