const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectID = Schema.Types.ObjectId;

var TagSchema = new Schema({
    name: String,
    isCliked: {type:Boolean, default: false},
  },{collection: 'tags'});
module.exports = mongoose.model('Tag',TagSchema);
