const handleHelloGermany = async (req, res) => {
  try {
    res.send("hello germany");
    return "GET /germany - success";
  } catch (error) {
    res.status(400).send(error.message);
    return `GET /germany - ${error.message}`;
  }
};

module.exports = handleHelloGermany;
