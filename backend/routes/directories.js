const express = require("express");
const router = express.Router();
const Directory = require("../models/Directory");


router.get("/", async (req, res) => {
  try {
    const directories = await Directory.find();
    res.json(directories);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:directoryId", async (req, res) => {
  try {
    const directory = await Directory.findById(req.params.directoryId);
    res.json(directory);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  // var modelArray = [];

  // var data = req.body.map((x) => {
  //   const directory = new Directory({
  //     Description: x.Description,
  //     Alias: x.Alias,
  //     PropertyLevel: x.PropertyLevel,
  //   });

  //   modelArray.push(directory);
  // });
  // console.log(modelArray);
  // test = Directory.insertMany(modelArray);
  // res.json(test);

  const directory = new Directory({
    Description: req.body.Description,
    Alias: req.body.Alias,
    PropertyLevel: req.body.PropertyLevel,
  });

  try {
    const savedDirectory = await directory.save();
    res.json(savedDirectory);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:directoryId", async (req, res) => {
  try {
    const updatedDirectory = await Directory.updateOne(
      { _id: req.params.directoryId },
      { $set: { S3Key: req.body.S3Key } }
    );
    res.json(updatedDirectory);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:directoryId", async (req, res) => {
  try {
    const removedDirectory = await Directory.remove({
      _id: req.params.directoryId,
    });
    res.json(removedDirectory);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
