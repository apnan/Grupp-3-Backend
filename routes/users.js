const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get all users
/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Fetches all users
 *    responses:
 *        '200':
 *            description: A successfull response
 */
router.get('/', async (req, res) => {
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

//post to create user in db
/**
 * @swagger
 * /api/users/login:
 *  post:
 *    description: Get user details for the given user name and password
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Find a user with username and password combination
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *            - password
 *          properties:
 *              userName:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
 */
router.post('/login', async (req, res) => {
  console.log('login user');
  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
  });
  // console.log(user);
  //Check if user with given user name exists else throw error
  try {
    const loggedInUser = await User.find({
      $and: [{ userName: user.userName }, { password: user.password }],
    });

    if (loggedInUser && loggedInUser.length != 0) {
      res.json(loggedInUser);
    } else {
      res
        .status(404)
        .json('User not found for the given user name and password');
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

/**
 * @swagger
 * /api/users/signin:
 *  post:
 *    description: Creates a new user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Create new user
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *          properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *
 *
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal problem
 */
router.post('/signin', async (req, res) => {
  console.log('Posted user');
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
      res.status(400).json({
        message: 'user with id: ' + user.userName + ' already exists.',
      });
      return;
    }

    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create a user, ' + error });
  }
});

// Delete post
/**
 * @swagger
 * /api/users/{userName}:
 *  delete:
 *    description: Delete a user with the given user name
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userName
 *        description: User name
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
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
/**
 * @swagger
 * /api/users/{userName}:
 *  patch:
 *    description: Update a user with the given user name
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Create new user
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *          properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
 */
router.patch('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          email: req.body.email,
          userName: req.body.userName,
        },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
