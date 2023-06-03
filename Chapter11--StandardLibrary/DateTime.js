let date = new Date();
console.log('Date ', date);

let yesterday = new Date(2023, 4, 27, 6, 30);
console.log('Yesterday ', yesterday);

let century = new Date(Date.UTC(2100, 0, 1));
console.log('UTC Date', century);

century = new Date('2100-01-01T00:00:00Z');
// not recommended to create date from string
console.log(century);

// recommended approach to create date
let milisecond = date.getTime();
console.log('Milisecond ', milisecond);
date = new Date(milisecond);
console.log('Date ', date);

// Timestamps
// send milisecond to server using JSON
let json = {
  date: date.getTime(),
};
console.log('JSON ', JSON.stringify(json));

// Date Methods
// console.log(date.setDate(date.getDate() + 1));
console.log('Year ', date.getFullYear());
console.log('Month ', date.getMonth());
console.log('Date ', date.getDate());

console.log('Day ', date.getDay());
// Sunday - Saturday : 0 - 6

// Date Time Arithmetic
// Do not implement on your own for heavy date arithmetic
// because there are a lot of unknown things for us
// Use moment.js
