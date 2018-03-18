//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


// db host url, callback fucntion
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('unable to connect to mongodb server.',err);
  }
  console.log('Connected to the mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id: new ObjectID('5aab57d92708c92d5a6dc520')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // }); // return the mongoDb curser/pointer

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count :${count}`);
  //
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // }); // return the mongoDb curser/pointer
  db.collection('Users').find({name: 'Sreenivas'}).toArray().then((docs) => {
    console.log(`Todos `);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  }); // return the mongoDb curser/pointer

  //client.close();
});
