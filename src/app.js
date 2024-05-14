const express = require("express");
const app = express();
const cors = require("cors");
const notFound = require("./middlewares/not-found");
require("dotenv").config();
const users = require("./routes/user");

// midlewares
app.use(express.json());

app.use(
  cors({
    origin: "localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(users);

app.use("/", (req, res) => {
  res.send("Server Up");
});

app.use(notFound);

module.exports = app;
