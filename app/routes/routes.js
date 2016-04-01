module.exports = function(app,mongo) {
  app.get('api/airports',function(req,res){
    var airports =  require('../../airports.json');
    res.json(airports);
  });

  app.get('api/flights',function(req,res){
    var flights =  require('../../dummydata/flights.json');
    res.json(flights);
  });
  app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};