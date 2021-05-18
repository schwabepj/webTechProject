const mongoose = require("mongoose");

const DirectorySchema = mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Alias: {
    type: String,
  },
  PropertyLevel: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Directories", DirectorySchema);
