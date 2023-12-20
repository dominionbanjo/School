const mongoose = require("mongoose");

const staffsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name !! "],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  class: {
    type: String,
    required: [true, "Must provide class !! "],
    trim: true,
    maxlength: [20, "Class cannot be more than 20 characters"],
  },
  phone: {
    type: Number,
    required: [true, "Must provide phone number !! "],
  },
  email: {
    type: String,
    required: [true, "Must provide email !! "],
    maxlength: [30, "Email cannot be more than 30 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Staffs", staffsSchema);
