const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
 
  router.get('/', function(req, res, next) {
    Menu.find()
    .then((menus) => res.json(menus))
    .catch(next);
  });

  router.get('/:menuname', function(req, res, next) {
    Menu.findOne({menuname: req.params.menuname})
    .then((menu) => res.json(menu))
    .catch(next);
  });

  router.post('/',  async function(req, res, next) {
    Menu.findOne({menuname: req.body.menuname})
    .then((result) => {
      if (!result) {
        Menu.create(req.body)
        .then((menu) => res.json(menu))
        .catch(next);
      } else {
        throw({"error": "A menu with this name already exists"})
      }
    })
    .catch(next);
  });

  router.put('/:menuname', function(req, res, next) {
    Menu.findOne({menuname: req.params.menuname})
    .then((result) => {
      if (result) {
        Menu.findOneAndUpdate({"menuname": req.params.menuname}, {"menuname": req.body.menuname})
        .then((menu) => res.send(req.body))
        .catch(next);
      } else {
        throw("A menu with this name does not exist");
      }
    })
    .catch(next);
  });

  router.put('/drinks/add/:menuname/', function(req, res, next) {
    Menu.findOne({menuname: req.params.menuname})
    .then((result) => {
      if (result) {
        Menu.findOneAndUpdate({"menuname": req.params.menuname}, {$push: {"drinks": req.body}})
        .then((menu) => res.send(req.body))
        .catch(next);
      } else {
        throw("A menu with this name does not exist");
      }
    })
    .catch(next);
  });

  router.put('/drinks/delete/:menuname/:drinkindex', function(req, res, next) {
    Menu.findOne({menuname: req.params.menuname})
    .then((result) => {
      console.log(result);
      if (result) { 
        Menu.findOneAndUpdate({"menuname": req.params.menuname}, {"drinks": result.drinks.filter((drink, index) => index === parseInt(req.params.drinkindex) ? false : true)})
        .then((menu) => res.send(`${req.params.drinkindex} drink was deleted.`))
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
        .then((menu) => res.status(200).send(menu))
        .catch(next);
      } else {
        throw("A menu with this name does not exist");
      }
    })
    .catch(next);
  });


module.exports = router;
