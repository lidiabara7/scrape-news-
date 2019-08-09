var db = require("../models");

module.exports = {
    //to find all headlines
    findAll: function(req, res) {
        db.Headline
        .find(req.query)
        .sort({ data: -1})
        .then(function(dbHeadline){
            res.json(dbHeadline);
        });
    },

    //to dleite the specified headline
    delete: function(req, res) {
        db.Headline.remove({_id: req.params.id})
        .then(function(dbHeadline){
            res.json(dbHeadline);
        });
    },
//to update the specifyied headline
    update: function(req, res) {
    db.Headlin.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true}).then(function(dbHeadline){
        res.json(dbHeadline);
    })       
    }
}