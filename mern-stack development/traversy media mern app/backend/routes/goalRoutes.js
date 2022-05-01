const express = require("express");
const {
  getGoal,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

// middleware
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getGoal);

router.post("/", protect, postGoal);

// router.route('/').get(getGoal).post(postGoal)

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router;
