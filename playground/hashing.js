const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10,(err,salt) =>{
//     bcrypt.hash(password, salt, (err,hash) =>{
//       console.log(hash);
//     });
// });

var hashedPassword ='$2a$10$No1bineD5798w6l6Z9LmtuvkvfsjzeDbasaj6ymBPb0wLG7P8GcY.';

bcrypt.compare('123abc',hashedPassword,(err,res) =>{
  console.log(res);
});


// var data = {
//   id:4
// };

// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc');
// console.log(token);
// console.log(decoded);
// var message = 'sri2018';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'somescret').toString()
// }
//
// token.data.id =5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somescret').toString();
//
// if(resultHash === token.hash){
//     console.log('Data was not changes');
// }else {
//     console.log('Data was changes, Dont trust them');
// }
