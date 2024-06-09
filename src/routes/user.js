const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
} = require("../controllers/users");
const { getSingleLiked } = require("../controllers/liked");
const { getSingleViewed, createProfileView } = require("../controllers/viewer");
const { rankUser } = require("../controllers/ranks");

router.route("/users").get(getAllUsers).post(createUsers);
router.route("/user/:username").get(getSingleUser).put(editSingleUser);
router.route("/liked/:username").get(getSingleLiked);
router.route("/views/:username").get(getSingleViewed).post(createProfileView);
router.route("/ranks").get(rankUser);

module.exports = router;
