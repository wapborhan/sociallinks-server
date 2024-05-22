const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
} = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getAllUsers).post(createUsers);
router.route("/user/:username").get(getSingleUser);

module.exports = router;
