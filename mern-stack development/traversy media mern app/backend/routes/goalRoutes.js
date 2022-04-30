const express = require("express");
const {
  getGoal,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.get("/", getGoal);

router.post("/", postGoal);

// router.route('/').get(getGoal).post(postGoal)

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router;
