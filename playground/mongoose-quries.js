
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5aaec92b8a33ab0714104bd0";


if(!ObjectID.isValid(id)){
  return console.log('Id is not valid');
}
Todo.find({
  _id:id // convert string to objectId by mongoose
}).then((todos) =>{
  console.log('Todos',todos);
});

Todo.findOne({
  completed: false
}).then((todo) => {
  console.log('Todo',todo);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo By Id',todo);
}).catch((e) => console.log(e));

User.find({
  _id:id
}).then((users) => {
  console.log('Users',users);
})

User.findOne({
  email: 't@m'
}).then((user) => {
console.log('User',user);
})

User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
