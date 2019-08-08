var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
    scrapeHeadlines: function (req, res) {
        return scrape()
            .then(function (articles) {
                return db.Headlines.create(articles);
            })
            .then(function (dbHeadline) {
                if (dbHeadline.length === 0) {
                    res.json({
                        messages: "No new articles check again latter"
                    })
                } else {
                    res.json({
                        message: "Added" + dbHeadline.length + "new articles!"
                    })
                }
            })
            .catch(function(err){
                res.json({
                    message: "Scrape complite!"
                })
            })
    }
} 