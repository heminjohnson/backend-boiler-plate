const app = require('./server.js')
const port = 5000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
