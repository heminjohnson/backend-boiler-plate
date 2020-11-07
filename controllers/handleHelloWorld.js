const { dummyHelperOne, dummyHelperTwo } = require("../helpers");

const handleHelloWorld = async (req, res) => {
  try {
    dummyHelperOne();
    dummyHelperTwo();

    res.send("hello world");
    return "GET /hello - success";
  } catch (error) {
    res.status(400).send(error.message);
    return `GET /hello - ${error.message}`;
  }
};

module.exports = handleHelloWorld;
