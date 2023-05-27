/*
Pattern Matching and Regular Expression 

validation 

email 
username@domainname
phone no [09-0293993]

*/

let re = /ab+c/;
// abc
// abbc
// abbbc

// It is called pattern matching
console.log('Re.test abc', re.test('abc')); // true
console.log('Re.test abbc', re.test('abbc')); // true
console.log('Re.test ac', re.test('ac')); // false

console.log('Re.match ', 'helloabbc'.match(re));

// Character Group - [xyz] - x or y or z
re = /[xyz]/;
console.log('/[xyz]/.test x', re.test('xyz')); // true
console.log('/[xyz]/.test y', re.test('y')); // true
console.log('/[xyz]/.test z', re.test('z')); // true
console.log('/[xyz]/.test a', re.test('a')); // false

re = /[0-9]+/;
console.log('/[0-9]+/.test 393992929', re.test('393992929'));
console.log('/[0-9]+/.test 3', re.test('3'));
console.log('/[0-9]+/.test ab', re.test('ab'));

re = /[a-zA-Z]/;

console.log('^ negated');
re = /[^xyz]/;

console.log('/[^xyz]/.test x', re.test('xyz')); // false
console.log('/[^xyz]/.test y', re.test('y')); // false
console.log('/[^xyz]/.test z', re.test('z')); // false
console.log('/[^xyz]/.test a', re.test('a')); // true

re = /^Java/;
console.log('^ without [ ] ');

console.log('/^Java/.test Java', re.test('Java')); //true
console.log('/^Java/.test JavaScript', re.test('JavaScript')); // true
console.log('/^Java/.test  JavaScript', re.test(' JavaScript')); // false

console.log('. any character except \n \r');
re = /^Java.b/;

console.log('/^Java.b.test Javacb', re.test('Javacb'));
console.log('/^Java.b.test Javakb', re.test('Javakb'));
console.log('/^Java.b.test Java\rb', re.test('Java\rb'));

console.log('d digit D non-digit');
re = /\d+/;
console.log('/d+/.test 393992929', re.test('393992929'));
console.log('/d+/.test 3', re.test('3'));
console.log('/d+/.test ab', re.test('ab'));

console.log('D non-digit');
re = /\D+/;
console.log('/D+/.test 393992929', re.test('393992929'));
console.log('/D+/.test 3', re.test('3'));
console.log('/D+/.test ab', re.test('ab'));

console.log(' w character');
re = /\w+/;
console.log('/w+/.test ', re.test('$'));

console.log('s space');
re = /\s+/;
