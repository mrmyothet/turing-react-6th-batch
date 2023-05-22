const inc = (x) => x + 1;
const double = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));

class Writer {
  constructor(value, log) {
    this.value = value;
    this.log = log;
  }
  static of(empty) {
    return (value) => new Writer(value, empty);
  }
  /*
  Container.of(3)
            .map(fn)
  */
  map(fn) {
    console.log('Value', this.value);
    return new Writer(fn(this.value), this.log);
  }
  //fn -> monadic function
  flatMap(fn) {
    const { value, log } = fn(this.value);
    return new Writer(value, this.log.concat(', ' + log));
  }
}
const unit = Writer.of('');

console.log('unit', unit instanceof Writer);

console.log('unit(3)', unit(3));
let writer = unit(3);
console.log('writer instanceof Writer', writer instanceof Writer);

let counter = unit(3);
console.log('counter', counter);
console.log('counter.map(inc)', counter.map(inc));

// add5 - monadic function
const add5 = (a) => Writer.of('added 5')(a + 5);
const add8 = (a) => Writer.of('added 8')(a + 8);
const theOne = new Writer(1, 'Initial One');

let result = theOne.flatMap(add5).flatMap(add8);
console.log('theOne.flatMap(add5).flatMap(add8)', result);
