const express = require("express");
const router = express.Router();
const images = require("../models/BackgroundImages");

router.get("/", async (req, res) => {
  try {
    res.json(await images.find());
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
