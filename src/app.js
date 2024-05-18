const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const notFound = require("./middlewares/not-found");
const applyMiddlewares = require("./middlewares");
const users = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

// midlewares
applyMiddlewares(app);

//  All Routes
app.use(users);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Not found
app.use(notFound);

module.exports = app;
