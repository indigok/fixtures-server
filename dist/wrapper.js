const express = require("express");
const app = express();

const fixturesServer = require("index.js");
app.use(
  fixturesServer()
);

app.listen(3000);
