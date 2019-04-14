const express = require('express')
const router = new express.Router()

router.get('/hello', async (req, res) => {
  res.send('hello world')
})

module.exports = router
