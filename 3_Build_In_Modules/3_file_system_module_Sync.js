const fs = require('fs');

//console.log('Start')

const first = fs.readFileSync('./3_Build_In_Modules/content/first.txt','utf8'); 
const second = fs.readFileSync('./3_Build_In_Modules/content/second.txt','utf8');


console.log(first);
console.log(second);

fs.writeFileSync('./3_Build_In_Modules/content/result_sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'});

//console.log('Done with the task');
//console.log('Starting the next one');