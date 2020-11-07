const express = require("express");
const { handleHelloWorld, handleHelloGermany } = require("../controllers");

const router = new express.Router();

router.get("/hello", async (req, res) => {
  const helloWorld = await handleHelloWorld(req, res);
  console.log(helloWorld);
});

router.get("/germany", async (req, res) => {
  const helloGermany = await handleHelloGermany(req, res);
  console.log(helloGermany);
});

module.exports = router;
