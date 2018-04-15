// Imported Modules

const express = require('express');
const app = express();
const routes = require('./routes/index.js');

// Load Routes

routes.loadRoutes(app);

// Run API Server

app.listen(3000, function () {
  console.log('Running Phone´s Catalog API');
});