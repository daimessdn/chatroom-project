import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("Users", UserSchema)

export default User;