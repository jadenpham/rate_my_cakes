var mongoose = require('mongoose');
require ('../config/mongoose.js')

var CommentSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String}
})
var CakeSchema = new mongoose.Schema({
    avg_rating: {type: Number},
    baker: {type: String, required: true},
    imgUrl: {type: String, required: true},
    comments: [CommentSchema],
})
mongoose.model('Cakes', CakeSchema);
// var Cake = mongoose.model('Cake');
mongoose.model('Comments', CommentSchema);
mongoose.Promise = global.Promise;