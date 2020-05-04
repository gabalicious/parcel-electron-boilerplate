const express = require('express');
const app = express();
const port = 5000;
const Path = require('path');

// Initialize a new bundler using a file and options
const { bundler } = require('./parcel');

function expressApp() {
  app.use(express.static(Path.join(__dirname, 'dist')));
  app.use(bundler.middleware());

  // Listen on port
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
}

module.exports = { expressApp };
