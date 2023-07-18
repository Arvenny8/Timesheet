const express = require("express");

const authController = require("../controller/authController");
const authMiddle = require("../middleware/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authMiddle, authController.getMe);

module.exports = router;
