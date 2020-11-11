require('dotenv').config()
const express = require("express");
if (process.env.DB_CONNECTION === 'true') {
  require("./db/mongoose");
}

const userRouter = require("./routers/user");
const helloRouter = require("./routers/hello");

const app = express();

app.use(require("./middlewares"));

app.use(userRouter);
app.use(helloRouter);

module.exports = app
