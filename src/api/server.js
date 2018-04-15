// Imported Modules

const express = require('express');
const app = express();
const routes = require('./routes/index.js');

// Load Routes

routes.loadRoutes(app);

// Setting static public folder to serve phone´s image

app.use('/phones/images', express.static(`${__dirname}/images`));

// Basic error handling

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send('Something goes wrong!');
});

// Run API Server

app.listen(3000, function () {
  console.log('Running Phone´s Catalog API');
});