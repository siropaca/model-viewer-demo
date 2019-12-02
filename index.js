const express = require('express');
const app = express();
const router = express.Router();å
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

router.get('/Astronaut.glb', function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.glb`));
});

router.get('/Astronaut.usdz', function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.usdz`));
});

app.use('/', router);

app.listen(3000);

console.log(`Listening on: http://localhost:3000`);