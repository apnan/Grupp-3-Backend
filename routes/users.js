const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get all users
router.get('/', async (req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    res.json({ message: error });
  }
});





router.get('/:userId', async (req, res) => {
  console.log(req.params.userId)
  try {
    res.json(await User.find(
        {
          name:  req.params.userId
        }
      )
    )
     
  } catch (error) {
    res.json({ message: error });
  }
});





//post to create user in db

router.post('/', async (req, res) => {
  console.log("Connected");
  const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    url:req.body.url
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});






// Delete post
router.delete('/:userId', async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(deletedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update post
router.patch('/:userId', async (req, res) => {
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
