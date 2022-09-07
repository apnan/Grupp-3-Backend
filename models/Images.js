const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const ImagesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("images", ImagesSchema);
