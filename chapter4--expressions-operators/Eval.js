// eval is evil 
// command injection is possible 
// limited use of eval 
let str = "alert('Something'), 1+2";
let result = eval(str);
console.log("Result Eval ", result);