const fs = require("fs");

console.log("Before");

fs.readFile('./data1.txt', (err, data) => {
    if (!err) {
        fs.readFile('./data2.txt', (err2, data2) => {
            if (!err2) {
                console.log('Data read : Done');
                console.log('Data ', data.toString().length);
                console.log('Data 2 ', data2.toString().length);
            }
            else {
                console.log(err2);
            }
        })
    }
    else {
        console.log(err)
    }
})

console.log('End')

// callbacvk hell
// sequential call 