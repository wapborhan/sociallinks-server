const asyncWrapper = require("../middlewares/async");
const Users = require("../models/Users");

const getSingleViewed = asyncWrapper(async (req, res) => {
  const { username } = req.params;
  let result = await Users.findOne({ username });
  res.send(result);
});

const createProfileView = asyncWrapper(async (req, res) => {
  const { username } = req.params;
  const { viewer } = req.body;

  try {
    let user = await Users.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const alreadyExists = user.profileViews.includes(viewer);

    if (alreadyExists) {
      return res.status(200).send("Profile view from this user already exists");
    }

    user.profileViews.push(viewer);
    await user.save();

    res.status(200).send("Profile view added successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = {
  getSingleViewed,
  createProfileView,
};
