const express = require('express');
const router = express.Router();
// const {MongoClient} = require("mongodb");
const Menu = require('../models/menu');

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Menus', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  router.get('/', function(req, res, next) {
    Menu.find()
    .then((menus) => {
      res.send(menus);
    })
    .catch(next);
  });

  router.post('/', function(req, res, next) {
    // const menu = new Menu(req.body);
    // menu.save();
    Menu.create(req.body)
    .then((menu) => {
      res.send(menu);
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

});




// MongoClient.connect("mongodb://localhost/Menus", { useUnifiedTopology: true })
//   .then(dbAPI => {
//     console.log('Connected to Database')
//     const db = dbAPI.db("Menus")
//     const usersCollection = process.env.NODE_ENV === "test" ? db.collection("testing") : db.collection('usermenus')

//     //Get all menus
//     router.get('/all', (req, res) => {
//       usersCollection.find()//.toArray() //Read a document in the database
//       .then(results => {
//         (result) ? res.status(200).send(result) //If one or more documents exist 
//         : res.status(400).send("No documents were found"); //If there are no documents
//         })
//       .catch(error => console.error(error))
//     });

    
//     //Get a single menu*
//     router.get('/:menuname', (req, res) => {
//       // req.params.menuName = req.params.menuName.toLowerCase();
//       usersCollection.findOne({"menuname": {$eq:req.params.menuname}}) //Read a document in the database
//       .then(result => {
//         (result) ? res.status(200).send(result) //If the document does exist 
//         : res.status(400).send("The requested user does not exist"); //If the document does not exist 
//       })
//       .catch(error => res.status(500).send(error))
//     });
    
//     //Add a new user*
//     router.post('/add-menu', (req, res) => {
//       // req.body.manuname = req.body.menuname.toLowerCase(); 
//       usersCollection.findOne({"menuname": {$eq:req.body.menuname}}) //Read a document in the database
//       .then(result => {
//         if (result) { //If the document does exist
//           res.status(400).send("The requested user already exists");
//         } else { //If the document does not exist  
//           usersCollection.insertOne(req.body) //Create a document in the database
//           .then(result => {
//             res.status(200).send("The requested user was added");
//           })
//           .catch(error => res.status(500).send(error)); 
//         };
//       })
//       .catch(error => res.status(500).send(error)); 
//     });

//     //Add a new habit to a user*
//     router.put('/add-cocktail/:menuname', (req, res) => {
//       // req.params.menuName = req.params.manuName.toLowerCase();
//       usersCollection.findOne({"menuname": {$eq:req.params.menuname}}) //Read a document in the database
//       .then(result => {
//         if (result) { //If the document does exist
//           usersCollection.updateOne({"menuname": req.params.menuname}, {$push: {"drink": req.body}}, true, false) //Update a document in the database
//           .then(
//             res.status(200).send("The requested habit was added")
//           )
//           .catch(error => res.status(500).send(error)); 
//         } else { //If the document does not exist
//           res.status(400).send("The requested user does not exist"); 
//         };
//       })
//       .catch(error => res.status(500).send(error)); 
//     });

//   });

module.exports = router;

    //Update a tracking field
  //   router.put('/update-habit/:username/:habitID/:indexTracking/:trueOrFalse', (req, res) => {
  //     req.params.username = req.params.username.toLowerCase();
  //     usersCollection.findOne({"username": {$eq:req.params.username}}) //Read a document in the database
  //     .then(result => {
  //       if (result === null) { //If the document does not exist
  //         res.status(400).send("The requested user does not exist");
  //       } else if (result.habit.length < req.params.habitID) { //If habit does not exist
  //         res.status(400).send("The requested habit does not exist");
  //       } else if (result.habit[req.params.habitID].tracking.length < req.params.indexTracking) { //If tracking does not exist
  //         res.status(400).send("The requested tracking field does not exist");
  //       } else if ((req.params.trueOrFalse !== "true") && (req.params.trueOrFalse !== "false")) { //If not boolean
  //         res.status(400).send("The requested tracking field value is not 'true' or 'false'");
  //       } else { //Update a document in the database
  //         usersCollection.updateOne({ "username": req.params.username },
  //         {$set: { [`habit.${req.params.habitID}.tracking.${req.params.indexTracking}`] : eval(req.params.trueOrFalse)}}, true,false)
  //         .then(
  //           res.status(200).send("The requested tracking field was updated")
  //         )
  //         .catch(error => res.status(500).send(error));

 
  //       };
  //     })
  //     .catch(error => res.status(500).send(error));  
  //   });


  //   router.put('/delete-habit/:username/:habitID', (req, res) => {
	// 		req.params.username = req.params.username.toLowerCase();
	// 		usersCollection.findOne({"username": {$eq:req.params.username}}) //Read a document in the database
	// 		.then(result => {
  //       if (result === null) { //If the document does not exist
  //         res.status(400).send("The requested user does not exist"); 
  //       } else if (result.habit.length < req.params.habitID) { //If habit does not exist
  //         res.status(400).send("The requested habit does not exist"); 
  //       } else {
  //         usersCollection.updateOne({"username": req.params.username}, {$unset: {[`habit.${req.params.habitID}`] : 1}}) //Update a document in the database
  //         .then(
  //         usersCollection.updateOne({"username": req.params.username}, {$pull : {"habit" : null}})) //Update a document in the database
  //         .then(
  //             res.status(200).send("The requested habit was deleted")
  //         )
  //         .catch(error => res.status(500).send(error));
  //       }
	// 		})
	// 		.catch(error => res.status(500).send(error));  
	// 	});
    
  //   //Delete a user
  //     router.delete('/delete-user/:username', (req, res) => {
  //       req.params.username = req.params.username.toLowerCase();
  //       usersCollection.findOne({"username": {$eq:req.params.username}}) //Read a document in the database
  //       .then(result => {
  //       if (result){
  //         usersCollection.deleteOne({"username": {$eq: req.params.username}})
  //         .then(
  //           res.status(200).send("The requested user was deleted")
  //         )
  //         .catch(error => res.status(500).send(error))
  //       }
  //       else{
  //         res.status(400).send("The requested user does not exist")
  //       }
  //     })
  //     .catch(error => res.status(500).send(error))
  //   })
  // })

