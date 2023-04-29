/*
0 0 = 0
0 1 = 1
1 0 = 1
1 1 = 1

if first operand falsy 
    return second operand 
else if first operand truthy
    return first operand 

*/

let result = true || 'true';
console.log("true || 'true' ", result);

result = null || "true";
console.log('null || "true" ', result);

let module = {
    api :function()
    {
        console.log('API ');
    }
};

window.module = window.module || {
    api :function()
    {
        console.log('New API');
    }
};

module.api();

let max = maxWidth || preferences.maxWidth || 500;
// use maxWidth if exist 
// if not use preferences.maxWidth if exist 
// if not use 500