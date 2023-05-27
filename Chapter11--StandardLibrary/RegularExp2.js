let re = /\S+@+\S+\.\S+/;

console.log('re.test hello ', re.test('hello'));
console.log('re.test hello@gmail.com ', re.test('hello@gmail.com'));
console.log('re.test hello@gmail ', re.test('hello@gmail'));

// Regular Expression - usecase
// Web scraping

console.log(' | or');
re = /(a|b)+/;
console.log('Re.test aaab', re.test('aaab'));
console.log('Re.test abab', re.test('abab'));
console.log('Re.test ca', re.test('ca'));
console.log('Re.test dd', re.test('dd'));

console.log('^ start $ end');

re = /Script$/;
console.log('/Script$/.test JavaScript', re.test('JavaScript'));
console.log('/Script$/.test NativeScript', re.test('NativeScript'));
console.log('/Script$/.test Java', re.test('Java'));

console.log(`\\b word boundry`);
re = /\bm/;
console.log('/\bm/.test moon ', re.test('moon'));
console.log('/\bm/.test demon ', re.test('demon'));
console.log('/\bm/.test demon milk', re.test('demon milk'));

console.log(`\\B non-word boundry`);
re = /\Bm/;
console.log('/Bm/.test moon ', re.test('moon'));
console.log('/Bm/.test demon ', re.test('demon'));
console.log('/Bm/.test demon milk', re.test('demon milk'));
