var mongoose = require('mongoose');
    var Cakes = mongoose.model('Cakes');

var cakes = require('../controllers/cakes.js');

module.exports = function(app){
    app.get('/cakes', function(req,res){
        console.log("all cakes hit routes");
        cakes.show_all(req, res);
    })
    app.get('/cakes/:id', function(req, res){
        console.log("click got to routes");
        cakes.one_cake(req, res);
    })
    app.post('/cakes/create', function(req, res){
        console.log("succesfully hit routes");
        cakes.create_cake(req, res);
    })
    app.post('/cakes/rating/:id', function(req, res){
        console.log("rating hitting the routes");
        cakes.add_rating(req,res);
    })
}