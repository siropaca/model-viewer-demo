const express = require("express");
const app = express();
const path = require("path");
const ngrok = require("ngrok");

const PORT = 4000;

app.get("/", function(req, res) {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/Astronaut.glb", function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.glb`));
});

app.get("/Astronaut.usdz", function(req, res) {
  res.sendFile(path.join(`${__dirname}/Astronaut.usdz`));
});

app.listen(PORT, async () => {
  const url = await ngrok.connect(PORT);
  console.log(url);
});