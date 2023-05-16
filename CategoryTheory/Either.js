/* MayBe limitation 
if there is an error, result will be null
cannot know the error 

Either 
  None
  Something
*/

const Nothing = (value) => ({
  value,
  map(fun) {
    return Nothing(value);
  },
});
Nothing.of = Nothing;

const Some = (value) => ({
  value,
  map(fun) {
    return Some(fun(value));
  },
});
Some.of = Some;

const Either = {
  Some,
  Nothing,
};

const incOne = (x) => x + 1;
let nothing = Nothing.of('some error').map(incOne);

console.log('Nothing ', nothing.value);

let something = Some.of(3).map(incOne);
console.log('Something ', something.value);

function div(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return Nothing.of('A or b is NaN');
  } else {
    return Some.of(a / b);
  }
}

let result = div(10, 2).map(incOne);
console.log('Result ', result.value); //6

result = div(10, NaN).map(incOne);
console.log('Result ', result.value);

// Imperative - exception throw
// Functional - Functor - Either

// Railway oriented programming
// Success -> Do Something
// Fail -> Do Something
