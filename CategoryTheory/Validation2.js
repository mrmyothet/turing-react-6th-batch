let obj = {
  name: 'Tk',
  age: 38,
  email: 'someone@gmail.com',
};

const NotEmpty = (x) => x.length > 0;

const minLength = (len) => (x) => x.length >= len;
const minimumLength = (x) => (len) => x.length >= len;
const maxLength = (len) => (x) => x.length <= len;

const isNameNotEmpty = (obj) =>
  NotEmpty(obj.name) ? Success(obj) : Failure('Name is Empty');

const emailNotEmpty = (obj) =>
  NotEmpty(obj.email) ? Success(obj) : Failure('Email is empty');

const ageValidRange = (obj) => obj.age > 0 && obj.age < 100;
const validEmail = (obj) => obj.email.includes('@');

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

/* 
Success
    Failure
        Failure
    Success 
        Success 
*/

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
  and(another) {
    return another.matchWith({
      success: (x) => Success.of(x),
      failure: (x) => Failure.of(x),
    });
  },
});

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
  and(another) {
    return another.matchWith({
      success: (x) => Failure.of(value),
      failure: (x) => Failure.of(value + ', ' + x),
    });
  },
});

function validatorCombinator(...validators) {
  return function (obj) {
    let nextResult = validator.map(obj);
  };
}
