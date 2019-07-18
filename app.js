var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require('./backend/models/cake.js');
var routes = require('./backend/config/routes.js')
require('./backend/config/mongoose')
routes(app);
app.listen(6789, function(req,res){
    console.log("listening on 6789")
})