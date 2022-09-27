const express = require("express");
const app = express();

const port = 3000;

app.get("/news", (req, res) => {
  res.send("Welcome to the servers!");
});

app.listen(port, () => console.log(`Start with port ${port}`));
