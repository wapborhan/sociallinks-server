const asyncWrapper = require("../middlewares/async");
const Users = require("../models/Users");

// Get Request
const getAllUsers = asyncWrapper(async (req, res) => {
  const result = await Users.find({});
  res.send(result);
});

const getSingleUser = asyncWrapper(async (req, res) => {
  const { username } = req.params;
  const filter = { username: username };
  const result = await Users.findOne(filter);
  res.status(200).json(result);
});

// Post Request

const createUsers = asyncWrapper(async (req, res) => {
  const data = await req.body;
  console.log(data);
  res.status(200).json(data);
});

module.exports = {
  getAllUsers,
  getSingleUser,
  createUsers,
};
