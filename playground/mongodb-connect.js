//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);

// destructuring the properties
 // var user ={name: 'Sreenivas', age: 25};
 // var {name} = user;
 // console.log(name);

// db host url, callback fucntion
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('unable to connect to mongodb server.',err);
  }
  console.log('Connected to the mongodb server.');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err) {
  //     return console.log('unable to insert the data',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Sreenivas',
  //   age: 35,
  //   location: 'Telangana'
  // },(err, result) => {
  //   if(err) {
  //     return console.log('unable to insert the data into Uers',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp())) ;
  // });

  client.close();
});
