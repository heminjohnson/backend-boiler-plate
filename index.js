const express = require("express");
if (process.env.DB_CONNECTION) {
  require("./db/mongoose");
}
const userRouter = require("./routers/user");
const helloRouter = require("./routers/hello");

const app = express();
const port = 5000;

app.use(require("./middlewares/middelwares"));

app.use(userRouter);
app.use(helloRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
