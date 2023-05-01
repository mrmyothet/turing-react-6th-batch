let arr = [10, 2, 100, 5];
console.log('Math.min ', Math.min(arr)); // NaN

// old school js
// borrowing min from Math
console.log(Math.min.apply(null, arr));

// modern js
console.log(Math.min(...arr));

// In react, use call and apply
// when there is no reference 'this'

// Why pass null as parameter
console.log(Math.min.apply(null, arr));
// because min is static method in Math
// you can provide Math itself
console.log(Math.min.apply(Math, arr));
