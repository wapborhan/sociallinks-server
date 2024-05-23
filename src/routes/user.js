const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
} = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getAllUsers).post(createUsers);
router.route("/user/:username").get(getSingleUser).put(editSingleUser);

module.exports = router;
