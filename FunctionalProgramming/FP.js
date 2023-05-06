/* Math function 

- A function must always take an argument 
- A function must always return a value 
- A function should act only on its receiving arguments (not the outside world)
- For a given X, there will be only one Y

*/

// impure function
function process() {
  x++;
}

// pure function
function toUpper(msg) {
  return msg.toUpperCase();
}
