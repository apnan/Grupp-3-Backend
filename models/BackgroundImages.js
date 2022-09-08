const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const BackgroundImagesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("backgroundimages", BackgroundImagesSchema);
