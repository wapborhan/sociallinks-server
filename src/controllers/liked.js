const asyncWrapper = require("../middlewares/async");
const Users = require("../models/Users");

const getSingleLiked = asyncWrapper(async (req, res) => {
  const { username } = req.params.username;
  const result = await Users.findOne(username);
  res.send(result?.profileLikes);
});

const createProfileLike = asyncWrapper(async (req, res) => {
  const { username } = req.params;
  const { liker } = req.body;
  try {
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    let user = await Users.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const alreadyExists = user.profileLikes.includes(liker);

    if (alreadyExists) {
      return res.status(409).json({ error: "Username already exists" });
    }

    user?.profileLikes.push(liker);
    await user.save();

    res.status(200).send("Liked Successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  getSingleLiked,
  createProfileLike,
};
