const express = require('express');
const router = express.Router();
// const {MongoClient} = require("mongodb");
const Menu = require('../models/menu');

// const mongoose = require('mongoose');


// // mongoose.connect('mongodb://localhost/Menus', {useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
 
  router.get('/', function(req, res, next) {
    Menu.find()
    .then((menus) => {
      res.send(menus);
    })
    .catch(next);
  });

  router.post('/',  async function(req, res, next) {
    Menu.findOne({menuname: req.body.menuname})
    .then((result) => {
      if (!result) {
        Menu.create(req.body)
        .then((menu) => {
          res.send(menu);
        })
        .catch(next);
      } else {
        throw("A menu with this name already exists");
      }
    })
    .catch(next);
    
  });

  router.put('/:menuname', function(req, res, next) {
    Menu.findOneAndUpdate({"menuname": req.params.menuname}, {$push: {"drinksList": req.body}})
    .then((menu) => {
      res.send(req.body);
    })
    .catch(next);
  });

  router.delete('/:menuname', function(req, res, next) {
    Menu.findOneAndDelete({ menuname: req.params.menuname })
    .then((menu) => {
      res.status(200).send(menu);
    })
    .catch(next);
  });

// });

module.exports = router;
