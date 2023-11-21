const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: [false, "Address is not required"],
      unique: false,
    },
    id: Number,
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    username: { type: String, unique: true },
    password: String,
    name: {
      firstname: String,
      lastname: String
    },
    phone: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);