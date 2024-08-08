// CommonJS,  every file is a module by default
// Modules  - Encapsulated Code (only share minimum) 

const names = require('./names');
const sayHi = require('./utils');
const data = require('./alt_flavor');
require('./mind_grenade');

//console.log(names);
//console.log(sayHi);
//console.log(data);

sayHi(`Thomas`);
sayHi(names.martin);
sayHi(names.chloe);