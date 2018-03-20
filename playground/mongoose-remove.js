
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//TOdo.remove ({}) it will remove all matching recotrd.

  Todo.remove({}).then((result) => {
    console.log(result);
  });

//Todo.

Todo.findOneAndRemove('5ab15bbe41c6dda181ed1b32').then( (doc) => {
  console.log(doc);
});

// Todo.findByIdAndRemove('5ab15aba41c6dda181ed1ac9').then( (doc) => {
//   console.log(doc);
// });
