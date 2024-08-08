// CommonJS,  every file is a module by default
// Modules  - Encapsulated Code (only share minimum) 

const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alt_flavor');
require('./7_mind_grenade');

//console.log(names);
//console.log(sayHi);
//console.log(data);

sayHi(`Thomas`);
sayHi(names.martin);
sayHi(names.chloe);