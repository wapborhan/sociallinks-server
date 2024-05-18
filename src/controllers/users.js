const asyncWrapper = require("../middlewares/async");
const AllUser = require("../models/Users");

const getUsers = asyncWrapper(async (req, res) => {
  const result = await AllUser.find({});
  res.send(result);
});

const createUsers = asyncWrapper(async (req, res) => {
  const data = await req.body;
  console.log(data);
  res.status(201).json(data);
});

module.exports = {
  getUsers,
  createUsers,
};
