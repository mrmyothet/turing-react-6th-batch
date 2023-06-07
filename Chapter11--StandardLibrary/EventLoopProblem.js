setTimeout(() => {
  console.log("World");
}, 0);

console.log("Hello");

while (true);
// If there is no code or stack frame on call stack,
// run queue
// Why event or timeout never called
// unresponsive - event handler have no chance
