const _ = require('lodash');
const router = require('express').Router();
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;
const Trip = require('../db/trip');
const User = require('../db/user');

const sendError = require('./error');
const sendSuccess = require('./success');


router.get('/getAll', function(req, res) {
  User.find()
    .then(function(doc){
      res.json(doc);
  });
});

router.post('/getTrips', function(req, res) {
  let email = req.body.email;
  User.find({email:email}).populate('trips').exec(function (err, user) {
    if (err) 
    console.log('The creator is %s', user.trips);

    res.json(user);
  });
});



router.put('/add', function(req, res) {
  let fullName = req.body.fullName;
  let email = req.body.email;
  let password = req.body.password;

  if(!fullName || !email || !password)
    return sendError(res,"fullName || email || password params are missing");

  var newUser = new User({
    fullName,
    email,
    password
  });
  newUser.save(function (err) {
    if (err) return sendError(err.message);

    return sendSuccess(res);
  });
});

router.delete('/delete', function(req, res) {
  let _id = req.body.user_id;
  if(!_id)
    return sendError(res,"user_id is missing");


  User.findOneAndRemove({ _id })
    .exec(function(err, user) {
      if (err || !user)
        return sendError(res,`user_id ${_id} not found`);

    return sendSuccess(res);
  });
});


module.exports = router;
