const express = require("express");
const { handleHelloWorld, handleHelloGermany } = require("../controllers");

const router = new express.Router();

router.get("/hello", handleHelloWorld);

router.get("/germany", handleHelloGermany);

module.exports = router;
