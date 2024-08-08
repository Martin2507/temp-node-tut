const fs = require('fs');

console.log('Start')

fs.readFile('./content/first.txt','utf8', (err,result) => 
    {
        if(err)
        {
            console.log(err);
        }
        const first = result;
        fs.readFile('./content/second.txt','utf8', (err,result) => 
            {
                if(err)
                {
                     console.log(err);
                }
                const second = result;
                fs.writeFile('./content/result_async.txt',`Here is the result: ${first}, ${second}`, (err,result) => 
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

