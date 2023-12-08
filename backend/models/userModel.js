const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please input your name'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add a password'],
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
