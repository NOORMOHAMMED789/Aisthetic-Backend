const express = require("express");
const router = express.Router();

const Menupage = require("../modal/user");

//! This is for the read the data -- (CREATE -- POST Method)
router.post("/", async (req, res) => {
  try {
    const orders = await Menupage.create(req.body);
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

router.use("*", (req, res) => {
  res.status(500).send("Invalid Url");
});

module.exports = router;
