const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
  getSingleLiked,
} = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getAllUsers).post(createUsers);
router.route("/user/:username").get(getSingleUser).put(editSingleUser);
router.route("/liked/:username").get(getSingleLiked);

module.exports = router;
