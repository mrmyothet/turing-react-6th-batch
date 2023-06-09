let result = '2' + 3;
console.log("Result ", result);
console.log("Type ", typeof result);

// one of operand is string -> string concatenation 
// else -> arithmetic operation - numeric addition is performed 

result = '2' + 3 + 5;
console.log("Result ", result);
console.log("Type ", typeof result);
// '2' + 3 
// '23' + 5
// 235

let obj = {

    toString: function(){
        console.log('toString called');
        return 'Hello';
    },

    valueOf:function(){
        console.log('valueOf called');
        return {};
    }
};

// Object to Primitive conversion 
result = '2' + obj;
console.log("Result ", result);

let arr = [10,20,30];
result = '2' + arr;
console.log("Result ", result);

let obj2 = {
    valueOf:function(){
        return 4;
    }
}

let obj3 = {
    valueOf:function(){
        return '5';
    }
}

result = obj2 + obj3;
console.log("Result ", result);

// toPrimitive(obj2) + toPrimitive(obj3)
// number + string 
// string concatenation 