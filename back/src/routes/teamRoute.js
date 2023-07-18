const express = require("express");

const teamController = require("../controller/teamController");

const router = express.Router();

router.get("/getpage", teamController.getTeampage);
router.get("/getemployeebyId/:id", teamController.getEmployeebyId);
router.get("/getemployee/:id", teamController.getEmployee);
router.get("/getAdmin/:id", teamController.getAdmin);
router.delete("/delete/:id", teamController.deleteById);
router.put("/update/:id", teamController.updateById);
module.exports = router;
