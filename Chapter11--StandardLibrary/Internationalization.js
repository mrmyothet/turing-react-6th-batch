let euros = Intl.NumberFormat('es', {
  style: 'currency',
  currency: 'EUR',
});
console.log('Euro ', euros.format(10));

let pounds = Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'GBP',
});
console.log('Pound', pounds.format(1000));

let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;

data.map((value) => {
  console.log(formatData(value));
});

console.log(data.map(formatData));

// Formatting Dates and Times
// Intl.DateTimeFormat()

// Use moment.js instead, thanks me later :)

// Should handle from server
// client should be for input and validation
