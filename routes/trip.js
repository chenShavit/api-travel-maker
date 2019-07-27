const router = require('express').Router();
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;

const sendError = require("./error");
const sendSuccess = require('./success');

const Trip = require('../db/trip');
const User = require('../db/user');

router.get('/getAll', function(req, res) {
  Trip.find({})
    .then(function(trips){
      res.json(trips);
  });
});


router.post('/book', function(req, res) {
  let trip_id = req.body.trip_id;
  if(!trip_id)
    return sendError(res,'trip param is missing');

  Trip.findByIdAndUpdate(trip_id,{isBooked: true }, function(err, result){
      if(err)
         return sendError(res, `trip_id ${trip_id} not exists`);
      return sendSuccess(res);
    });
});

module.exports = router;
