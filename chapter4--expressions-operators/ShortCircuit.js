function getFalse()
{
    console.log('GetFalse');
    return false;
}

function getTrue()
{
    console.log('GetTrue');
    return true;
}

console.log("getTrue() || getFalse() ", getTrue() || getFalse());
console.log("getTrue() | getFalse() " , getTrue() | getFalse());

console.log("getFalse() && getTrue() ", getFalse() && getTrue());
console.log("getFalse() & getTrue() ", getFalse() & getTrue());
