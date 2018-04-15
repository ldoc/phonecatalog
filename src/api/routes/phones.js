const phonesCatalog = require('../models/phones.js');

// Function that set routes for phones entities

exports.setPhonesRoutes = (app) => {

  app.get('/phones', function(req, res) {
    res.send( phonesCatalog.getPhones() );
  });

}
