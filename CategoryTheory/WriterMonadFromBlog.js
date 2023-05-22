/*
https://blog.klipse.tech/javascript/2016/08/31/monads-javascript.html

Functional Programming: Monads made clear - in javascript

*/

// logging function calls
const sine = (x) => [Math.sin(x), 'sine was called. '];
const cube = (x) => [x * x * x, 'cube was called. '];

const sineCubed = (x) => cube(sine(x));

const compose = (f, g) => (x) => f(g(x));
const sineOfCube = compose(cube, sine);

console.log('sine(0.3218)', sine(0.3218));
console.log('cube(3)', cube(3));
// console.log('sineCubed(1.22)', sineCubed(1.22));

// var x = 1.22;
// console.log('sineOfCube(x) === sineCubed(x)', sineOfCube(x) === sineCubed(x));

// console.log('compose(sine, cube)(3)', compose(sine, cube)(3));

/*
var composeDebuggable = (f, g) => (x) => {
  const [y, strX] = g(x),
    [z, stryY] = f(y);
  return [z, strX + stryY];
};
console.log(
  'composeDebuggable(sine, cube)(3)',
  composeDebuggable(sine, cube)(3)
);
*/

/* bind
its job is to take N -> (N, S) function 
and returns (N,S) -> (N,S) function 
*/

var bind = (f) =>
  function (tuple) {
    const [x, s] = tuple,
      [y, t] = f(x);
    return [y, s + t];
  };

var f = compose(bind(sine), bind(cube));
console.log('f([3, ""])', f([3, '']));

/* unit 
take a value and wrap it in a basic container that 
the functions we are working with can consume. 
for our debuggable functions, it just the number with a blank string
*/
var unit = (x) => [x, ''];
console.log('f(unit(3))', f(unit(3)));

// we can also compose f and unit
console.log('compose(f, unit)(3)', compose(f, unit)(3));

// round: Number -> Number
var round = (x) => Math.round(x);

// roundDubug: Number -> [Number, String]
// const roundDebug = (x) => unit(round(x));

// lift: (Number->Number) -> (Number-> (Number,String))
var lift = (f) => compose(unit, f);

var roundDebug = lift(Math.round);

var f = compose(bind(roundDebug), bind(sine));
console.log('f(unit(27))', f(unit(27)));

/* Summary
1. lift - which converts a simple function into a debuggable function
2. bind - which converts a debuggable function into a composable form 
3. unit - which converts a simple value into the required format for debugging, 
          by placing it in a container

Those abstrations (bind and unit) defind a monad. 
*/
