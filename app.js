const express = require("express");
const cort = require("cors");

const app = express();

app.use(cort());
app.use(express.json());

app.post("/login", (req, res) => {
  res.json({ message: "Welcome to congact book application. " });
});

module.exports = app;
