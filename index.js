const  GameController = require ('./controllers/game');
const  AuthorController = require ('./controllers/author');

var express = require('express');
var app = express();

new GameController(app);
new AuthorController(app);

app.get('/', function (req, res) {
  res.send('Api de Juegos de mesa')
});

app.listen(3000, function () {
  console.log('La app se encuentra en el puerto 3000');
});