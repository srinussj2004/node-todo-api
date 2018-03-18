//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


// db host url, callback fucntion
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('unable to connect to mongodb server.',err);
  }
  console.log('Connected to the mongodb server.');
  const db = client.db('TodoApp');


  //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //   {_id: new ObjectID("5aab54152708c92d5a6dc492")},
    //   {$set: {completed: true}},
    //   {returnOriginal: false }).then((result) =>{
    //   console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5aae0347328dd90b84ca5c46")
    },{
      $set: {
        name: "Shreyanvi"
      },
      $inc: {
        age: 1}
      },{
        returnOriginal: false
      }).then((result) =>{
      console.log(JSON.stringify(result, undefined, 2));
    });
  //client.close();
});
