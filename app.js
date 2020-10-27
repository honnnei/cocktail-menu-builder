const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const menus = require('./routes/menus');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const pdf = require('html-pdf');
const menuTemplate = require('./documents/index');

mongoose.connect('mongodb://localhost/Menus', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    app.use(cors());
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    app.use('/menus', menus);

    app.post('/create-pdf', (req, res) => {
      pdf.create(menuTemplate(req.body), {}).toFile('menu.pdf', (err) => {
        if (err) {
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      });
       
    });
  
    app.get('/get-pdf', (req, res) =>{
      res.sendFile(`${__dirname}/menu.pdf`);
    });

    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error:  err
      });
    });

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });

});

module.exports = app;

