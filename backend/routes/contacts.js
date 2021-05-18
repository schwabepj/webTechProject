const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:contactId", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const contact = new Contact({
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    Title:req.body.Title,
    CompanyName: req.body.CompanyName,
    ContactType: req.body.ContactType,
    ContactScope: req.body.ContactScope,
    Adress: req.body.Adress,
    URL: req.body.URL,
    Email: req.body.Email,
  });

  try {
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:contactId", async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne(
      { _id: req.params.contactId },
      { $set: { S3Key: req.body.S3Key } }
    );
    res.json(updatedContact);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:contactId", async (req, res) => {
  try {
    const removedContact = await Contact.remove({_id:req.params.contactId});
    res.json(removedContact);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
