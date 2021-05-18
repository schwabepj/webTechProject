const mongoose = require("mongoose");

const DocumentSchema = mongoose.Schema({
  Division: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Subcategory: {
    type: String,
    required: true,
  },
  Association: {
    type: String,
    required: true,
  },
  S3Key: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Documents", DocumentSchema);
