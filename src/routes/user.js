const express = require("express");
const { getUsers, createUsers } = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getUsers).post(createUsers);

module.exports = router;
