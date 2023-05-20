const Container = (value) => ({
  val() {
    return value;
  },
  map(fn) {
    return Container.of(fn(value));
  },
  /*
  Container'value -> func (another'value)
  */
  ap(another) {
    return another.map(value);
  },
});
Container.of = Container;

// curried form
const add = (x) => (y) => x + y;
const inc = (x) => x + 1;

let a = Container(2);

let add3 = Container.of(3).map(add);

let result = add3.ap(a);
console.log('add3.ap(a) ', result.val());

// one param for binary function
// Container (add (3))
// apply function with value of another container

result = Container.of(3).map(add).ap(a);
// Container.of(3).map(add) // add(3)
// .ap(a)   // add(3)(2)
console.log('Container.of(3).map(add).ap(a)', result.val());

result = Container.of(3).map(add).ap(a).map(inc);
console.log('Container.of(3).map(add).ap(a).map(inc)', result.val());

/*
Semigroup
    monoid
        functor
            monad
*/
