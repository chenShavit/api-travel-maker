const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TripSchema = new Schema({
  destination: {type:String, required: true},
  price: {type: Number, required: true},
  pictures:[String],
  pepoleNumber:Number,
  days: Number,
  startDate: {type: Date, default: new Date()},
  endDate: {type: Date, default: new Date()},
  isBooked: {type: Boolean, default:false},
    places: [{
      user_id: {type: Schema.Types.ObjectId , ref : 'User'},
      name: String,
      picture:String,
      icons:[String],
      description:String,
      time:String
    }]
  },{collection: 'trips'});

module.exports = mongoose.model('Trip',TripSchema);

