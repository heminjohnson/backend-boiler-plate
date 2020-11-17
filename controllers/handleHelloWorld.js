const { dummyHelperOne, dummyHelperTwo } = require("../helpers");

const handleHelloWorld = async (req, res) => {
  try {
    dummyHelperOne();
    dummyHelperTwo();

    res.json({ message: "hello world" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = handleHelloWorld;
