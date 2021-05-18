const express = require("express");
const router = express.Router();
const Drawing = require("../models/Drawing");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, deleteFile, updateFile } = require("../controllers/s3");

router.get("/", async (req, res) => {
  try {
    const drawing = await Drawing.find();
    res.json(drawing);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:drawingId", async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.drawingId);
    res.json(drawing);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", upload.any(), async (req, res) => {
  const file = req.files[0];
  const result = await uploadFile(file);
  await unlinkFile(file.path);

  if (result.Key) {
    const drawing = new Drawing({
      StoredFileGroup: req.body.StoredFileGroup,
      Division: req.body.Division,
      Description: req.body.Description,
      Discipline: req.body.Discipline,
      Category: req.body.Category,
      Subcategory: req.body.Subcategory,
      Association: req.body.Association,
      S3Key: result.Key,
    });

    try {
      const savedDrawing = await drawing.save();
      console.log(savedDrawing);
      res.json(savedDrawing);
    } catch (error) {
      res.json({ message: error });
    }
  } else return res.send("aws s3 couldnt upload...");
});

router.patch("/:drawingId", upload.any(), async (req, res) => {
  try {
    const file = req.files[0];
    const drawing = await Drawing.findById(req.params.drawingId);
    const result = await updateFile(file, drawing.S3Key);
    console.log(drawing.S3Key);
    await unlinkFile(file.path);

    if (result) {
      const updatedDrawing = await Drawing.updateOne(
        { _id: req.params.drawingId },
        {
          $set: {
            StoredFileGroup: req.body.StoredFileGroup,
            Division: req.body.Division,
            Description: req.body.Description,
            Discipline: req.body.Discipline,
            Category: req.body.Category,
            Subcategory: req.body.Subcategory,
            Association: req.body.Association,
          },
        }
      );
      res.json(updatedDrawing);
    } else res.send("aws s3 couldnt update...");
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:drawingId", async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.documentId);
    const result = await deleteFile(drawing.S3Key);
    console.log(drawing.S3Key);
    const removedDrawing = await Drawing.remove({ _id: req.params.drawingId });
    res.json(removedDrawing);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
