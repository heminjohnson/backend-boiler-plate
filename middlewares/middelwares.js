const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = [express.json(), cors(), morgan("combined"), helmet()];
