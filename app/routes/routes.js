
module.exports = function(app,mongo) {
app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};