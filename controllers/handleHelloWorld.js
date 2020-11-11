const { dummyHelperOne, dummyHelperTwo } = require("../helpers");

const handleHelloWorld = async (req, res) => {
  try {
    dummyHelperOne();
    dummyHelperTwo();

    res.json({ message: "hello world" });
    return "GET /hello - success";
  } catch (error) {
    res.status(400).json(error.message);
    return `GET /hello - ${error.message}`;
  }
};

module.exports = handleHelloWorld;
