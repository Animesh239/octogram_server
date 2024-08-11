//express server
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
