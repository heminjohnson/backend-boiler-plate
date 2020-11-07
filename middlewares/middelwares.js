const express = require("express");
const cors = require('cors')
const morgan = require('morgan')

module.exports = [
  express.json(),
  cors(),
  morgan('combined')
]
