// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var headlineSchema = new Schema({
  // headline, a string, must be entered
headline: {
  type: String,
  require:true
},
  // summary, a string, must be entered
summary: {
  type: String,
  require: true
},
  // url, a string, must be entered
url: {
  type: String,
  require: true
},
  // date is just a string
date: {
  type: String
},
  // saved, boolean default false
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
var Headline = mongoose.model("Headline", headlineSchema);

// Export the Headline model
module.exports = Headline;
