const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  location: { type: String },
  bio: { type: String },
  links: { type: Array },
});
const Users = model("users", UserSchema);

module.exports = Users;
