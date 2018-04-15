
// Function that set routes fo the API

exports.loadRoutes = (app) => {

  app.get('/', function(req, res) {
    res.send('Hi , I´m the phones catalog API');
  });

}
