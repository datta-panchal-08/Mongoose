const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')

const userSchema = mongoose.Schema({
  username : String,
  description : String,
  nickname : String,
  categories : {
    type : Array,
    default : []
  },
  datecreated : {
    type : Date,
    default : Date.now()
  }

});

module.exports = mongoose.model("user",userSchema);