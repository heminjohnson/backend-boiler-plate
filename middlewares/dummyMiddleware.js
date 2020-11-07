const dummyMiddleware = async (req, res, next) => {
  console.log("--- DUMMY MIDDLEWARE TRIGGERED ---");
  next();
};

module.exports = dummyMiddleware;
