const router = require('express').Router();
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;

const Tag = require('../db/tag');


router.get('/getAll', function(req, res) {
  Tag.find()
    .then(function(doc){
      res.json(doc);
  });
});

module.exports = router;
