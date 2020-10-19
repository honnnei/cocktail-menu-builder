const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
 
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

    Menu.findOne({menuname: req.params.menuname})
    .then((result) => {
      if (result) {
        Menu.findOneAndUpdate({"menuname": req.params.menuname}, {$push: {"drinksList": req.body}})
        .then((menu) => {
          res.send(req.body);
        })
        .catch(next);
      } else {
        throw("A menu with this name does not exist");
      }
    })
    .catch(next);
    
  });

  router.delete('/:menuname', function(req, res, next) {
    
    Menu.findOne({menuname: req.params.menuname})
    .then((result) => {
      if (result) {
        Menu.findOneAndDelete({ menuname: req.params.menuname })
        .then((menu) => {
          res.status(200).send(menu);
        })
        .catch(next);
      } else {
        throw("A menu with this name does not exist");
      }
    })
    .catch(next);
  
  });


module.exports = router;
