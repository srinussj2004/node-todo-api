var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); // capture the json from client and send to below post

app.post('/todos',(req,resp) =>{

var todo = new Todo({
  text: req.body.text
});

todo.save().then((doc) =>{
  resp.send(doc);
}, (e) =>{
  resp.status(400).send(e);
});
});

app.get('/todos', (req, res) => {
Todo.find().then((todos) =>{
  res.send({todos});
},(e) => {
  resp.status(400).send(e);
  });
});

app.listen(3000, () =>{
  console.log('node to api application server started @ 3000 port number');
});

module.exports ={app};
