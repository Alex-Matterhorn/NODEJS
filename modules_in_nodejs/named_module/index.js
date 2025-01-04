//подключение именного модуля
/*
способ 1

let m1 = require('./named_mod');
console.log(m1.randomInt());
*/
//способ 2
const {randomInt} = require('./named_mod');

console.log(randomInt());