const router = require('express').Router();
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;

const sendError = require("./error");
const sendSuccess = require('./success');

const Trip = require('../db/trip');
const User = require('../db/user');
const Tag = require('../db/tag');


router.get('/getAll', function(req, res) {
  Tag.find()
    .then(function(doc){
      res.json(doc);
  });
});

module.exports = router;
