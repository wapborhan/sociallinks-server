const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const notFound = require("./middlewares/not-found");
const users = require("./routes/user");

// midlewares
app.use(express.json());
app.use(
  cors({
    origin: "localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(users);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Not found
app.use(notFound);

module.exports = app;
