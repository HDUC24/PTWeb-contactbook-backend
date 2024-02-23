const express = require("express");
const cort = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();

app.use(cort());
app.use(express.json());
app.use("api/contacts", contactsRouter);
app.post("/login", (req, res) => {
  res.json({ message: "Welcome to congact book application. " });
});

module.exports = app;
