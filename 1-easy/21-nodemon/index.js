const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (_req, res) => {
  res.send("Ciao Mario!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
