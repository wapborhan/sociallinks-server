const asyncWrapper = require("../middlewares/async");

const getUsers = asyncWrapper(async (req, res) => {
  res.status(200).json("users");
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
