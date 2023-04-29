
// function pop(stack, elecment, top) {
//     stackArr[top] = element ;
// }

// function push(stackArr, top) {
//     return stackArr[top];
// }

// let arr = [];
// let top = 0;
// push(arr, "One", top);
// top++;
// push(arr, 'Two', top);
// top++;


let stack = {
    items: [], 
    top: -1, 
    push: function(element)
    {
        this.items[++top] = element;
    }, 

    pop: function()
    {
        return this.items[this.top--];
    }
};

stack.push('One');
stack.push('Two');
console.log('Pop ', stack.pop());