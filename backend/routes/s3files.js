const express = require("express");
const router = express.Router();

const { getFile } = require("../controllers/s3");

router.get("/:key", async (req, res) => {
  try {
    console.log(req.params);
    const key = req.params.key;
    const readStream = getFile(key);
    readStream.pipe(res);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
