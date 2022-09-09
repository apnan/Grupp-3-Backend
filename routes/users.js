const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Get all users
router.get("/", async (req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:userId", async (req, res) => {
  console.log(req.params.userId);
  try {
    res.json(
      await User.find({
        name: req.params.userId,
      })
    );
  } catch (error) {
    res.json({ message: error });
  }
});

//post to create user in db
router.post("/login", async (req, res) => {
  console.log("login user");
  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
  });
  console.log(user);
  try {
    res.json(
      await User.find({
        $and: [{ userName: user.userName }, { password: user.password }],
      })
    );
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  console.log("Posted user");
  const user = new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    //find if there is any existing user with same user id
    const existingUser = await User.find({ userName: user.userName });

    if (existingUser.length !== 0) {
      console.log("user with id: " + user.userName + " already existing");  
      res.status(500).json({ message: 'user already exists'})
      return
    }

    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
     res.status(500).json({ message: "Something went wrong" });
  }
});

/* router.post('/', async (req, res) => {
  console.log("Connected");
  const user = new User({
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    userName: req.body.userName,
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
 */
// Delete post
router.delete("/:userId", async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(deletedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update post
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
        },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
