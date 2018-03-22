const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id:4
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc');
console.log(token);
console.log(decoded);
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
