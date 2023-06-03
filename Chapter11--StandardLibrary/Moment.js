var a = moment('2023-05-27');
console.log(a.toDate());
var b = a.add(1, 'week');
console.log('One Week added ', b.toDate());
b = a.add(2, 'week');
console.log('2 weeks added', b.toDate());

// format
console.log(b.format('MMMM Do YYYY, h:mm:ss A'));
