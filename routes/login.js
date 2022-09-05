const express = require("express");
const router = express.Router();
const User = require("../models/User");



router.post("/", async (req, res) => {

  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
  
  });
 console.log(user)
  try {
    res.json(
      await User.find({
        name: user.userName,
        password: user.password
      })
    );
  } catch (error) {
    res.json({ message: error });
  }
});


module.exports = router;
