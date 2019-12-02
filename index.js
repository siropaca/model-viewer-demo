const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/index.html`))
});

app.get('/Astronaut.glb', function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.glb`))
});

app.get('/Astronaut.usdz', function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.usdz`))
});

app.listen(3000, () => console.log('Listening on: http://localhost:3000'))