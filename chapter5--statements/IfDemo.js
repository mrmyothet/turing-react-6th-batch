let raining = 'true';
console.log(raining);
console.log(typeof raining);
console.log(!!raining);

// work with truthy or falsy
if (raining) {
    console.log('Take umbrella');
}
console.log('End of statement');

let mark = 50;
if (mark >= 40) {
    console.log('Pass');
}
else
{
    console.log('Fail');
}