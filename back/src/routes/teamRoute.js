const express = require("express");

const teamController = require("../controller/teamController");

const router = express.Router();

router.get("/getpage", teamController.getTeampage);
router.delete("/delete/:id", teamController.deleteById);
router.put("/update/:id", teamController.updateById);
module.exports = router;
