const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Day: { type: String, required: true },
  Persons: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Menupage", userSchema);
