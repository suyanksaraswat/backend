const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  postedBy: {
    type: String,
    required: true,
  },
  lookingTo: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  kindOfProperty: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  propertyType: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 1,
    max: 13,
  },
  location: {
    city: {
      type: String,
      required: true,
      min: 1,
      max: 255,
    },
    locality: {
      type: String,
      required: true,
      min: 1,
      max: 255,
    },
  },
  area: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  isRecommended: {
    type: Boolean,
  },
  isFavorite: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Property", propertySchema);
