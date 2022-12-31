const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: Number },
  item: { type: String },
});

module.exports = mongoose.model("products", productSchema);
