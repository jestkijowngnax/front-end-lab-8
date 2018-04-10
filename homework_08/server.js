process.stdout.write('What are you waiting for? \n');

const express = require('express');       
const app = express();                
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

let handlers = require('./controllers/handlers');

app.post('/rockstar', handlers.post);
app.get('/rockstars', handlers.get);
app.get('/rockstar/:id', handlers.getById);
app.put('/rockstar/:id', handlers.put);
app.delete('/rockstar:id', handlers.delete);

app.listen(port);
console.log('Magic happens on port ' + port);	
