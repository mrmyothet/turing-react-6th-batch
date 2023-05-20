const Left = (value) => ({
  map() {
    return Left.of(value);
  },
  val() {
    return value;
  },
  matchWith(context) {
    return context.left(value);
  },
});
Left.of = (value) => Left(value);

const Right = (value) => ({
  map(fn) {
    return Right(fn(value));
  },
  val() {
    return value;
  },
  matchWith(context) {
    return context.right(value);
  },
});
Right.of = (value) => Right(value);

function div(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return Left('a or b is NaN');
  } else {
    return Right(a / b);
  }
}

let inc = (x) => x + 1;

let result = div(10, 2)
  .map(inc)
  .matchWith({
    right: (x) => console.log('Success case', x),
    left: (err) => console.log('There is error', err),
  });
// console.log('Result ', result.val());

result = div(10, NaN)
  .map(inc)
  .matchWith({
    right: (x) => console.log('Success case', x),
    left: (err) => console.log('There is error', err),
  });
// console.log('Result ', result.val());

// Requirement
// success  -> do something
// error    -> do someting

// matchWith
