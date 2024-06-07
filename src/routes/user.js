const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
  getSingleLiked,
  getSingleViewed,
  createProfileView,
  rankUser,
} = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getAllUsers).post(createUsers);
router.route("/user/:username").get(getSingleUser).put(editSingleUser);
router.route("/liked/:username").get(getSingleLiked);
router.route("/views/:username").get(getSingleViewed).post(createProfileView);
router.route("/ranks").get(rankUser);

module.exports = router;
