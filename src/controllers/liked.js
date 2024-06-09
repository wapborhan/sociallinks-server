const asyncWrapper = require("../middlewares/async");
const Users = require("../models/Users");

const getSingleLiked = asyncWrapper(async (req, res) => {
  const { username } = req.params.username;
  const result = await Users.findOne(username);
  res.send(result?.giveLikes);
});
module.exports = {
  getSingleLiked,
};
