const Success = (value) => ({
  tag: 'Success',
  val() {
    return value;
  },
  map(fn) {
    return Success.of(fn(value));
  },
  flatMap(fn) {
    return fn(value);
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
Success.of = Success;

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
Failure.of = Failure;

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

const validEmail = (obj) =>
  obj.email.includes('@') ? Success(obj) : Failure('Invalid email');

const ageValidRange = (obj) =>
  obj.age > 0 && obj.age < 100 ? Success(obj) : Failure('Invalid age');

let validationResult = Success.of(obj).map(isNameNotEmpty);
console.log(validationResult.val());

/*

return Success.of(fn(value))

const isNameNotEmpty = (obj) => notEmpty(obj.name)
                                ? Success(obj)
                                : Failure('Name is empty');

Success.map 
  Success.of(Success.of(obj))

Box[Box(value)]

map
  normal function - input - primitive/object - not container/functor
  (inc) => x => x + 1;

Container reuturned function 
monadic function - use flatMap

functor - include - flatMap -> is called Monad
Monad -> chain monadic function 

*/

validationResult = Success.of(obj).flatMap(isNameNotEmpty).map(validEmail);

// .map(isNameNotEmpty) // Box[]
// .map(validEmail)   // Box[Box(value)]
// Uncaught TypeError: Cannot read properties of undefined
// (reading 'includes')

console.log(validationResult.val());
