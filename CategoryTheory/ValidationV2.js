// Want to show error message

const Failure = (value) => ({
  tag: 'Failure',
  val() {
    return value;
  },
  map() {
    return Failure.of(value);
  },
  matchWith(context) {
    return context.failure(value);
  },
});
Failure.of = (value) => Failure(value);

const Success = (value) => ({
  tag: 'Success',
  val() {
    return value;
  },
  map(fn) {
    return Success.of(fn(value));
  },
  matchWith(context) {
    return context.success(value);
  },
});
Success.of = (value) => Success(value);

let obj = {
  name: 'Tk',
  age: 38,
  email: 'someone@gmail.com',
};

const NotEmpty = (x) => x != '';

const isNameNotEmpty = (obj) =>
  NotEmpty(obj.name) ? Success(obj) : Failure('Name is empty');

const emailNotEmpty = (obj) =>
  NotEmpty(obj.email) ? Success(obj) : Failure('Email is empty');

const ageValidRange = (obj) => obj.age > 0 && obj.age < 100;
const validEmail = (obj) => obj.email.includes('@');

// console.log('NameNotEmpty', isNameNotEmpty(obj).val());

// let result = isNameNotEmpty(obj).map(emailNotEmpty);
// console.log('isNameNotEmpty(obj).map(emailNotEmpty)', result.val().val());

// map  -> Box(value)
//      -> Box(Box(value))

/*
[validators -> Success | Failure]
*/
/*
function validatorCombinator(...validators) {
  return function (obj) {
    return validators.reduce((previousResult, validator) => {
      //   console.log('A ', previousResult, ' B ', validator);
      let result = validator(obj);
      console.log('Result ', result.val());
      return previousResult && validator(obj);
    }, Success(obj));
  };
}
*/

// const combinator = validatorCombinator(isNameNotEmpty, emailNotEmpty);
// console.log('Combinator ', combinator({ name: '', email: '' }));

// want to accumulate error message
function validatorCombinator(...validators) {
  return function (obj) {
    return validators.reduce((previousResult, validator) => {
      let result = validator(obj);

      if (result.tag == 'Failure') {
        if (previousResult.tag == 'Failure') {
          let errorMessage = previousResult.val() + ' , ' + result.val();
        }
        return result;
      } else {
        return Success(obj);
      }
      console.log('Result ', result.val());
      return previousResult && validator(obj);
    }, Success(obj));
  };
}

const combinator = validatorCombinator(isNameNotEmpty, emailNotEmpty);

console.log('Combinator ', combinator({ name: '', email: '' }).val());
console.log('Combinator ', combinator(obj).val());

combinator(obj).map((x) => console.log('Save into db', x));

combinator({ name: '', email: '' }).matchWith({
  success: (obj) => console.log('validation ok', obj),
  failure: (obj) => console.log('validation failed'),
});
