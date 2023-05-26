// Add Methods into existing classes

String.prototype.getData = function () {
  return this.toString();
};

let str = 'Hello';
console.log(str.getData());

// Monkey Patching
// no need in traditional programming
