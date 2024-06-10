const asyncWrapper = require("../middlewares/async");
const Users = require("../models/Users");

const rankUser = asyncWrapper(async (req, res) => {
  const users = await Users.find({}).limit(10);
  const sortedUsers = users.sort((a, b) => {
    const profileLikesDiff = b.profileLikes.length - a.profileLikes.length;
    if (profileLikesDiff !== 0) return profileLikesDiff;

    return b.profileViews.length - a.profileViews.length;
  });

  res.send(sortedUsers);
});

module.exports = {
  rankUser,
};
