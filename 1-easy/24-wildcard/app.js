const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/user/:user_name", (req, res) => {
  res.send("This is backend");
});

app.get("/*", (_req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log("Server is running");
});
