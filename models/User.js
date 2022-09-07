const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
  userName: {
    type: String
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true,
  }
});

module.exports = mongoose.model('users', UserSchema); 
