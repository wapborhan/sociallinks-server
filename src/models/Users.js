const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  photoUrl: { type: String, required: true },
  address: { type: String },
  bio: { type: String },
  links: { type: Object },
  giveLikes: { type: Array },
  recvLikes: { type: Array },
});
const Users = model("users", UserSchema);

module.exports = Users;
