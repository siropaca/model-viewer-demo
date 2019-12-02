const express = require("express");
const app = express();
const path = require("path");
const ngrok = require("ngrok");

app.get("/", function(req, res) {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/Astronaut.glb", function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.glb`));
});

app.get("/Astronaut.usdz", function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.usdz`));
});

app.listen(3100, async () => {
  const url = await ngrok.connect(3100);
  console.log(url);
});