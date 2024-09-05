const fs = require("fs");

let start = new Date();

try {
    // console.log('Start');

    const data = fs.readFileSync('data1.txt', 'utf-8');
    console.log('data1.txt ', data.toString().length);

    const data2 = fs.readFileSync('data2.txt', 'utf-8');
    console.log('data2.txt ', data2.toString().length);

    let end = new Date();
    let time = end - start;
    console.log('Time ', time);

} catch (err) {
    console.error(err)
}