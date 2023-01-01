const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  Day: {
    type: String,
    required: true,
  },
  Persons: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
