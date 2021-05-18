const express = require("express");
const router = express.Router();
const Equipment = require("../models/Equipment");

router.get("/", async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:drawingId", async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.drawingId);
    res.json(equipment);
  } catch (error) {
    res.json({ message: error });
  }
});


router.post("/", async (req, res) => {
  const equipment = new Equipment({
    Division: req.body.Division,
    System: req.body.System,
    Description: req.body.Description,
    Type: req.body.Type,
    Association: req.body.Association,
    Manufacturer: req.body.Manufacturer,
    ModelNumber: req.body.ModelNumber,
    ModelDescription: req.body.ModelDescription,
  });

  try {
    const savedEquipment = await equipment.save();
    res.json(savedEquipment);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:drawingId", async (req, res) => {
  try {
    const updatedEquipment = await Equipment.updateOne(
      { _id: req.params.drawingId },
      { $set: { S3Key: req.body.S3Key } }
    );
    res.json(updatedEquipment);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:drawingId", async (req, res) => {
  try {
    const removedEquipment = await Equipment.remove({
      _id: req.params.drawingId,
    });
    res.json(removedEquipment);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
