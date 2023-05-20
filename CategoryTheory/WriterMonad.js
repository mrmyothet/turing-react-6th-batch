// function inc(x) {
//   console.log('x is ', x);
//   x + 1;
// }

// console.log is side effects

const inc = (x) => [x + 1, `inc called with ${x}`];
const double = (x) => [x * 2, `double is called with ${x}`];

let [result, logStr] = inc(10);
console.log(result, logStr);

// let newFunc = compose(double, inc);
// console.log('NewFunc ', newFunc(10));

/*
compose(f, g){
    [result, log] = g(x);
    [result2, log2] = f(result)

    return [result2, log+log2];
}
*/

let composeDebuggable = (f, g) => (x) => {
  let [result, logStr] = g(x);
  let [result2, logStr2] = f(result);

  return [result2, logStr + ', ' + logStr2];
};

let newFunc = composeDebuggable(double, inc);
console.log('composeDebuggable(double, inc)', newFunc(10));

const bind = (f) =>
  function (tuple) {
    const [result, log1] = tuple,
      [result2, log2] = f(result);

    return [result2, log1 + ', ' + log2];
  };

let newFunctionWithTuple = compose(bind(inc));
