const fs = require("fs");

console.log('Before');

fs.promises.readFile('./fileName.txt')
    .then(fileName => fs.promises.readFile(fileName))
    .then(data => console.log('Data ', data.toString().length));

console.log('End');