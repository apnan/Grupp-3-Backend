const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  console.log("Registering a user");
  const user = new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});




module.exports = router;
