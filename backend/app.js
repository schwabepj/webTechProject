const express = require("express");

const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const documentRoute = require("./routes/documents");
const contactRoute = require("./routes/contacts");
const directoryRoute = require("./routes/directories");
const drawingRoute = require("./routes/drawings");
const equipmentRoute = require("./routes/equipments");
const s3files = require("./routes/s3files");


const bodyParser = require("body-parser");

require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());
app.use("/documents", documentRoute);
app.use("/contacts", contactRoute);
app.use("/directories", directoryRoute);
app.use("/drawings", drawingRoute);
app.use("/equipments", equipmentRoute);
app.use("/files", s3files);

app.get("/", (req, res) => {
  res.send("datasphere api");
});

//

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("db connected...");
});

app.listen(process.env.PORT);
