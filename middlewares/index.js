const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dummyMiddleware = require("./dummyMiddleware")

module.exports = [express.json(), cors(), morgan("common"), helmet(), dummyMiddleware];
