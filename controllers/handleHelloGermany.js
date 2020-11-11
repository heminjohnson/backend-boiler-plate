const handleHelloGermany = async (req, res) => {
  try {
    res.json({message: "hello germany"});
    return "GET /germany - success";
  } catch (error) {
    res.status(400).json(error.message);
    return `GET /germany - ${error.message}`;
  }
};

module.exports = handleHelloGermany;
