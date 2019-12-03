const express = require("express");
const app = express();
const path = require("path");
const ngrok = require("ngrok");
const config = require("./.ngrokconfig.json");

const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/assets/:fileName", (req, res) => {
  res.sendFile(path.join(`${__dirname}/assets/${req.params.fileName}`));
});

app.listen(PORT, async () => {
  const url = await ngrok.connect({
    addr: PORT,
    authtoken: config.AUTHTOKEN
  });
  console.log(url);
});
