import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: [true, "Email is Required"] },
  password: { type: String, required: [true, "password is Required"] },
  about: String,
  profileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
