let pro = Promise.reject(20);
const double = (x) => x * 2;

// pro.then(double)
//     .then(console.log)

//resolve -> is similar Right in Either

pro.then(double, err => {
    throw new Error('We got bad thing')
})
    .then(console.log)
    .catch(err => console.log('Err', err))