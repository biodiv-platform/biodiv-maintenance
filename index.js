const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("*", function (_req, res) {
  res
    .set("Retry-After", 21600)
    .status(503)
    .sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
