const express = require("express");
const router = express.Router();
const Document = require("../models/Document");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, deleteFile, updateFile } = require("../controllers/s3");

router.get("/", async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:documentId", async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId);
    res.json(document);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", upload.any(), async (req, res) => {
  const file = req.files[0];
  const result = await uploadFile(file);
  await unlinkFile(file.path);

  if (result.Key) {
    const document = new Document({
      Division: req.body.Division,
      Description: req.body.Description,
      Category: req.body.Category,
      Subcategory: req.body.Subcategory,
      Association: req.body.Association,
      S3Key: result.Key,
    });

    try {
      const savedDocument = await document.save();
      console.log(savedDocument);
      res.json(savedDocument);
    } catch (error) {
      res.json({ message: error });
    }
  } else res.json("aws s3 couldnt upload the file");
});

router.patch("/:documentId", upload.any(), async (req, res) => {
  try {
    const file = req.files[0];
    const document = await Document.findById(req.params.documentId);
    const result = await updateFile(file, document.S3Key);
    console.log(document.S3Key);
    await unlinkFile(file.path);

    if (result) {
      const updatedDocument = await Document.updateOne(
        { _id: req.params.documentId },
        {
          $set: {
            Division: req.body.Division,
            Description: req.body.Description,
            Category: req.body.Category,
            Subcategory: req.body.Subcategory,
            Association: req.body.Association,
          },
        }
      );
      res.json(updatedDocument);
    } else res.send("aws s3 couldnt update...");
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:documentId", async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId);
    const result = await deleteFile(document.S3Key);
    console.log(document.S3Key);
    const removedDocument = await Document.remove({
      _id: req.params.documentId,
    });
    res.json(removedDocument);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
