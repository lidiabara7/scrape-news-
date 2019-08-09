var db = require("../models");

module.exports = {
    // find one
    find: function(req, res){
        db.Note.find({_headlineId: req.prams.id})
        .then(function(dbNote){
            res.json(dbNote);

        });
    },
    // create one note
    create: function(req, res) {
        db.Note.create(rq.body).then(function(dbNote){
            res.json(dbNote);  
        });
    },
    delete: function(req, res) {
        db.Note.remove({_id: req.params.id})
        .then(function(dbNote){
            res.json(dbNote);
        });
    }
};