const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const notFound = require("./middlewares/not-found");
const applyMiddlewares = require("./middlewares");
const router = require("./routes/user");
const globalErrorHandler = require("./utils/globalErrorHandler");

app.use(express.static(path.join(__dirname, "public")));

// midlewares
applyMiddlewares(app);

//  All Routes
app.use(router);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// Not found
app.use(notFound);

module.exports = app;
