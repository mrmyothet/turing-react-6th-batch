// Church encoding
// boolean represented as function

const TRUE = (a) => (b) => a;
const FALSE = (a) => (b) => b;
// const NOT = (b) => b(FALSE, TRUE);
const NOT = (f) => (a) => (b) => f(b)(a);

const AND = (a, b) => a(b(TRUE, FALSE), FALSE);

// console.log(NOT(true));
Function.prototype.toJsBool = function () {
  return this(true)(false);
};

console.log('True ', TRUE.toJsBool());
console.log('Not False', NOT(FALSE).toJsBool());
console.log('Not True', NOT(TRUE).toJsBool());

const substract = (a) => (b) => a - b;
substract(5, 3);
