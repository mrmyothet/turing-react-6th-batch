let obj = {
  name: 'Tk',
  age: 38,
  email: 'someone@gmail.com',
};

const NotEmpty = (x) => x.length > 0;

const minLength = (len) => (x) => x.length >= len;
const minimumLength = (x) => (len) => x.length >= len;
const maxLength = (len) => (x) => x.length <= len;

const nameNotEmpty = (obj) => NotEmpty(obj.name);
const emailNotEmpty = (obj) => NotEmpty(obj.email);

const ageValidRange = (obj) => obj.age > 0 && obj.age < 100;
const validEmail = (obj) => obj.email.includes('@');

// one param - obj

console.log('Min Length', minLength(3)('Tk'));
console.log('Minimum Length', minimumLength('Tk')(3));
console.log('Max Length ', maxLength(3)('TKEEE'));
console.log('Max Length ', maxLength(3)('TKE'));

// Combinator
function andCombinators(...validators) {
  return function (x) {
    return validators.reduce((a, validator) => {
      //   console.log('A', a, ' B', validator);
      return a && validator(x);
    }, true);
  };
}

function orCombinators(...validators) {
  return function (x) {
    return validators.reduce((a, validator) => {
      //   console.log('A', a, ' B', validator);
      return a || validator(x);
    }, false);
  };
}

// minLength must be X and maxLength must be Y
const validators = [minLength(3), maxLength(5)];
result = andCombinators(...validators)('Hello');
console.log(result); // true

result = andCombinators(...validators)('He');
console.log(result); // false

const nameAndEmailValidator = andCombinators(nameNotEmpty, emailNotEmpty);

result = nameAndEmailValidator(obj);
console.log(result);

result = nameAndEmailValidator({
  name: '',
  email: 'gmail.com',
});
console.log(result);

const orValidator = orCombinators(emailNotEmpty, ageValidRange);
result = orValidator({
  age: 130,
  email: '',
});
console.log('orValidator ', result);
