const User = require('../models/User');

exports.get_all_users = async (req, res) => {
  let allUsers = await User.find(req);
  return res.status(200).json(allUsers);
};

exports.get_a_user = async (req, res) => {
  const user = await User.find({
    name: req.params.userId,
  });
  return res.status(200).json(user);
};

exports.login_a_user = async (req, res) => {
  console.log('login user');
  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
  });
  try {
    const loggedInUser = await User.find({
      $and: [{ userName: user.userName }, { password: user.password }],
    });

    if (loggedInUser && loggedInUser.length != 0) {
      res.status(201).json(loggedInUser);
    } else {
      res
        .status(404)
        .json('User not found for the given user name and password');
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.sign_a_user = async (req, res) => {
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
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create a user, ' + error });
  }
};

exports.update_a_user = async (req, res) => {
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
    res.status(200).json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.delete_user = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.json({ message: error });
  }
};

/* ********************************************************************************************' */

/* const allUsers = async (r) => {
  let allUsers = await User.find(r);
  return allUsers;
};
 */
/* const findUser = async (userId) => {
  const user = await User.find({
    name: userId,
  });
  return user;
};
 */
/* const logIn = async (user) => {
  console.log('login user');
  const loggedInUser = new User({
    userName: user.userName,
    password: user.password,
  });
  return loggedInUser;
};
 */
/* const signIn = async (user) => {
  const signedInUser = new User({
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    email: user.email,
  });
  return signedInUser;
}; */

/* const deleteUser = async (userId) => {
  const deletedUser = await User.deleteOne({ _id: userId });
  return deletedUser;
}; */

/* const updateUser = async (userId) => {
  const updatedUser = await User.updateOne(
    { _id: userId.params.userId },
    {
      $set: {
        firstName: userId.body.firstName,
        lastName: userId.body.lastName,
        password: userId.body.password,
        email: userId.body.email,
        userName: userId.body.userName,
      },
    }
  );
  return updatedUser;
};
 */
