const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const Product = require("../modal/product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: "Success",
      products,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;
