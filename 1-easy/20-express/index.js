const express = require("express");
const app = express();
const port = 8000;

app.get("/", (_req, res) => {
  res.send("Hi from an Express app");
});

app.listen(port, () => {
  console.log("Server is running");
});
