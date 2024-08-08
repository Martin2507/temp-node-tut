const fs = require('fs');

console.log('Start')

fs.readFile('./3_Build_In_Modules/content/first.txt','utf8', (err,result) => 
    {
        if(err)
        {
            console.log(err);
        }
        const first = result;
        fs.readFile('./3_Build_In_Modules/content/second.txt','utf8', (err,result) => 
            {
                if(err)
                {
                     console.log(err);
                }
                const second = result;
                fs.writeFile('./3_Build_In_Modules/content/result_async.txt',`Here is the result: ${first}, ${second}`, (err,result) => 
                    {
                        if(err)
                        {
                            console.log(err);
                            return;
                        }
                        console.log("Done with this task");
                    })
            })
    });

    console.log('Starting the next task')

