const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({ 
    fullName: {type:String, required: true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    trips: {type: Schema.Types.ObjectId , ref : 'Trip', default: null},
    tags: {type: Schema.Types.ObjectId , ref : 'Tag'},
  },{collection: 'users'});

module.exports = mongoose.model('User',UserSchema);
