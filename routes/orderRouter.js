const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const Menupage = require("../modal/user");

router.get("/", async (req, res) => {
  try {
    const orders = await Menupage.find();
    res.json({
      status: "Success",
      orders,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
      orders: [],
    });
  }
});

//! This is for the read the data -- (CREATE -- POST Method)
router.post("/", async (req, res) => {
  try {
    const orders = await Order.create(req.body);
    res.json({
      status: "Success",
      orders,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//! This is for the read the data -- (UPDATE -- PUT Method)
router.put("/:order_id", async (req, res) => {
  try {
    const data = await Order.findOne({ orderId: req.params.order_id });
    res.json({
      status: "Success",
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//! This is for the read the data -- (DELETE -- DELETE Method)
router.delete("/:id", async (req, res) => {
  try {
    const data = await Order.findOne({ id: req.params.id });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.use("*", (req, res) => {
  res.status(500).send("Invalid Url");
});

module.exports = router;
