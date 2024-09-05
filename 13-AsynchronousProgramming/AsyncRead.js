const fs = require("fs");

let start = new Date();

let p1 = fs.promises.readFile('data1.txt');
let p2 = fs.promises.readFile('data2.txt');

Promise.all([p1, p2]).then(data => {
    let end = new Date();
    let time = end - start;
    console.log("Time ", time);
})