// Imported Routes Files

const phonesRoutes = require('./phones.js');

// Function that set routes for the API

exports.loadRoutes = (app) => {

  // Entry API route

  app.get('/', function(req, res) {
    res.send('Hi , I´m the phones catalog API');
  });

  // Set other Routes

  phonesRoutes.setPhonesRoutes(app);

}
