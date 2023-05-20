const Container = (value) => ({
  val() {
    return value;
  },
  map(fn) {
    return Container.of(fn(value));
  },
  flatMap(fn) {
    return fn(value);
  },
  join() {
    return value;
  },
});
Container.of = Container;

let normalFunc = (x) => x + 1;
let monadicDoubleFunc = (x) => Container.of(x * 2);
let normalDouble = (x) => x * 2;

let counter = Container(3).map(normalFunc).flatMap(monadicDoubleFunc);
console.log(counter.val());

// flatMap -> map and join
counter = Container.of(3).map(monadicDoubleFunc).join().map(normalFunc);

console.log('map.join', counter.val());

// left identity
// unit(x) -> f -> f(x)

let result = Container.of(3).flatMap(monadicDoubleFunc);
console.log('Rule 1: ', result.val() === normalDouble(3));

/*

flatMap(f)
flatMap(g)
faltMap(f g)

*/

/*
mongodB
    reactive
        findById(id){
            MayBe.of()
        }
*/

/*

A monad is just a monoid in the category of endofunctors

monoid laws 
functors laws 

associativity 

functor.map(funA)
        .map(funB)

functor.map(funA, funB)

endoFunctor - same category input -> same category output 

endoFunctor - functor - mapable - same type 

a -> M a
unit 
bind - flatMap 
join - unwrap - flat 
join(mma): M(M T) -> M T

(M a) -> (a -> M b) -> (M b)

M = Container

let monadicDoubleFunc = 



*/
