const express = require('express');
const router = express.Router();
const User = require('../models/User');

/**
 * @openapi
 * /allUsers:
 *   get:
 *     description: List of all users
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The user's name.
 *                 example: Jon
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@gmail.com
 *               image:
 *                 type: string
 *                 description: Profile Picture.
 *                 example: https://unsplash.com/photos/kopSFA_42_s
 *               backgroundImage:
 *                 type: string
 *                 description: Background Picture.
 *                 example: https://unsplash.com/photos/kopSFA_42_s
 *               firstName:
 *                 type: string
 *                 description: First Name.
 *                 example: Joe
 *               secondName:
 *                 type: string
 *                 description: Second Name.
 *                 example: Doe
 *
 *     responses:
 *       200:
 *
 */

router.get('/allUsers', async (req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    res.json({ message: error });
  }
});

router.get('/:userId', async (req, res) => {
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

/**
 * @openapi
 * /register:
 *   post:
 *     description: Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The user's name.
 *                 example: Jon
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@gmail.com
 *
 *               firstName:
 *                 type: string
 *                 description: First Name.
 *                 example: Joe
 *               secondName:
 *                 type: string
 *                 description: Second Name.
 *                 example: Doe
 *
 *     responses:
 *       200:
 *
 */

router.post('/register', async (req, res) => {
  console.log('Posted');
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

/**
 * @openapi
 * /login:
 *   post:
 *     description: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The user's name.
 *                 example: Jon
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@gmail.com
 *
 *               firstName:
 *                 type: string
 *                 description: First Name.
 *                 example: Joe
 *               secondName:
 *                 type: string
 *                 description: Second Name.
 *                 example: Doe
 *
 *     responses:
 *       200:
 *
 */

router.post('/login', async (req, res) => {
  console.log('Posted');
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

/**
 * @openapi
 * /:userId:
 *   delete:
 *     description: Delete user
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *
 *     responses:
 *       200:
 *
 */
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
