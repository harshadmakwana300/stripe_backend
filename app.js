const express = require("express");
require("express-async-errors");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.static("uploads"));
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
global.srcDirPath = __dirname + "/src";
require(srcDirPath)(app);

app.listen(process.env.PORT, function () {
  console.log(`stript Backend........${process.env.PORT}`);
});
