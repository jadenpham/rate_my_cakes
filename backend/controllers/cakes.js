const mongoose = require('mongoose'),
    Cakes = mongoose.model('Cakes')
Comments = mongoose.model('Comments')

module.exports = {
    show_all: function (req, res) {
        Cakes.find({}, function (err, cakes) {
            if (err) {
                res.json(err)
            } else {
                // console.log(cakes, "this is from cakes model")
                res.json(cakes)
            }
        });
    },
    one_cake: function(req, res){
        Cakes.find({_id: req.params.id}, function(err, cakes){
            if(err){
                res.json(err);
            } else{
                console.log("got to the controller", cakes);
                res.json(cakes);
            }
        })
    },
    create_cake: function (req, res) {
        Cakes.create({ baker: req.body.baker, imgUrl: req.body.url }, function (err, cakes) {
            if (err) {
                res.json(err);
            } else {
                console.log(cakes, "succesfully added into cakes model")
                res.json(cakes);
            }
        });
    },
    add_rating: function (req, res) {
        console.log(req.body, "at controller now");
        new_comment = new Comments({ rating: req.body.rating, comment: req.body.comment });
        console.log("this is the new comment", new_comment, "this is the params id", req.params.id);
        Cakes.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: new_comment } }, function (err) {
            if (err) {
                console.log("this is the error", err);
            };
        });
    }}
            // Comments.create({rating: req.body.rating, comment: req.body.comment}, function(err, rating){
            //     if(err){
            //         console.log(err, "error at controller");
            //     } else{
            //         Cakes.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}})
            //         console.log(rating, "succesfully added at controller");
            //         res.json(rating)
            //     }
            // })
