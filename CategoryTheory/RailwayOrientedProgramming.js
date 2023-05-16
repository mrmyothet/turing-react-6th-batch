// Left - Failure Path
// Right - Success Path

const Left = (value) => ({
  map() {
    return Left.of(value);
  },
  join() {
    return Left.of(value);
  },
  chain() {
    return Left.of(value);
  },
  ap() {
    return Left.of(value);
  },
  toString: () => `Left(${value})`,
  val() {
    return value;
  },
});
Left.of = (value) => Left(value);

const Right = (value) => ({
  val() {
    return value;
  },
  map(fn) {
    return Right(fn(value));
  },
  join() {
    if (value instanceof Left || value instanceof Right) {
      return value;
    } else {
      return Right.of(value);
    }
  },
  chain(fn) {
    return fn(value);
  },
  ap(otherEither) {
    const functionToRun = otherEither.val();
    console.log('Function to run ', functionToRun);
    return this.map(functionToRun);
  },
  toString: () => `Id(${value})`,
});
Right.of = (value) => Right(value);

console.log('Left ', Left.of(3).map().toString());
console.log(
  'Right >> ',
  Right.of(3)
    .map((x) => x + 1)
    .val()
);

/* 
Container(3)
  -> value = 3
Container(Container(3)) // need to Unbox
  -> value = Container

of -> Box 
join -> Unbox
*/
