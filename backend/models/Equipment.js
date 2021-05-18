const mongoose = require("mongoose");

const EquipmentSchema = mongoose.Schema({
  Division: {
    type: String,
    required: true,
  },
  System: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Association: {
    type: String,
    required: true,
  },
  Manufacturer: {
    type: String,
    required: true,
  },
  ModelNumber: {
    type: String,
    required: true,
  },
  ModelDescription: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Equipments", EquipmentSchema);
