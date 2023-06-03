console.log('Groups - ()');

const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}

/*
quantifiers
* zero or more 
+ one or more
? zero or one 

*/

console.log('* zero or more ');
let re = /a*/;
console.log('/a*/ .test moon', re.test('moon'));
console.log('/a*/ .test aaaa', re.test('aaaa'));

console.log('+ one or more');
re = /a+/;
console.log('/a+/ .test moon', re.test('moon'));
console.log('/a+/ .test aaaa', re.test('aaaa'));
console.log('/a+/ .test a', re.test('a'));

console.log('? zero or one ');
re = /a?/g;
console.log('/a?/ .test moon', re.test('moon'));
console.log('/a?/ .test a', re.test('a'));

console.log('/a?/ .test aaaa', re.test('aaaa'));

for (const match of 'aaa'.matchAll(re)) {
  console.log('Match ', match);
}

// x{n} - n occurences
console.log('x{n} - n occurences');
re = /\d{3}/g;
console.log('/d{3} .test 122', re.test('122'));
console.log('/d{3}/ .test 12', re.test('12'));
console.log('/d{3}/ .test 1333', re.test('1333'));

// x{n,} - at least n occurences
console.log('x{n,} - at least n occurences');
re = /\d{3,}/;
console.log('/d{3,}/ .test 122', re.test('122'));
console.log('/d{3,}/ .test 12', re.test('12'));
console.log('/d{3,}/ .test 1333', re.test('1333'));

// x{n,m} - at least n and at most m
console.log('x{n,m} - at least n and at most m');
re = /\d{3,5}/;
console.log('/d{3,5}/ .test 122', re.test('122'));
console.log('/d{3,5}/ .test 12', re.test('12'));
console.log('/d{3,5}/ .test 1333', re.test('1333'));
