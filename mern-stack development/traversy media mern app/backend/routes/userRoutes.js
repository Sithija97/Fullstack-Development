const express = require("express");
const {
  registerUser,
  loginUser,
  getUserData,
} = require("../controllers/userController");
const router = express.Router();

// middleware
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUserData);

module.exports = router;
