const handleHelloGermany = async (req, res) => {
  try {
    res.json({ message: "hello germany" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = handleHelloGermany;
