const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({data: 'hello world'})
})

app.listen(5000)
