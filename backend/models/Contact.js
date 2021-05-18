const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  LastName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
  },
  CompanyName: {
    type: String,
    required: true,
  },
  ContactType: {
    type: String,
    required: true,
  },
  ContactScope: {
    type: String,
    required: true,
  },
  Adress: {
    Adress1: { type: String },
    Adress2: { type: String },
    City: { type: String },
    State: { type: String },
    Zipcode: { type: String },
    Phone1: { type: String },
    Phone2: { type: String },
  },
  URL: {
    type: String,
  },
  Email: {
    type: String,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contacts", ContactSchema);
