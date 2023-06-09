// Equality Operator -> ==

let obj = {
    valueOf:function()
    {
        return 4;
    }
}

console.log("4 == obj ", 4 == obj); // true

let obj3 = {
    valueOf: function()
    {
        return false;
    }
}
console.log("false == obj3 ", false==obj3);
// false == obj3
// toNumber(false) = obj3
// 0 == obj3
// 0 == toPrimitive(obj3)
// 0 == false - if boolean convert to number 
// 0 == 0
// true 

let obj4 = {
    valueOf:function()
    {
        return 'false';
    }
}
console.log("false == obj4 ", false==obj4);

/*
false == obj4
toNumber(false) == obj4
0 == obj4
0 == toPrimitive(obj4)
0 == 'false'
0 == NaN
false

*/

let obj5 = {
    valueOf:function()
    {
        return null;
    }
}
console.log("null == obj5 ", false==obj5);
// false - because of unmatch with rules 

console.log("undefined == false ", undefined==false);
/*
undefined == false
undefined == toNumber(false)
undefined == 0
false 
*/