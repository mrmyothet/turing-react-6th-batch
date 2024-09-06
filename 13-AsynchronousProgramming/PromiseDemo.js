function div(a, b, callback) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
            return callback('A or B is Nan', null);
        }
        else {
            return callback(null, a / b);
        }
    }, 1000);
}

/*
div(10, NaN, (err, data) => {
    if (!err) {

        console.log('Data ', data);
    }
    else {
        console.error(err);
    }
})
    */

// Promise 
//  resolve, reject

function divPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                return reject('A or B is Nan');
            }
            else {
                return resolve(a / b);
            }
        }, 1000);
    });
}

divPromise(10, NaN)
    .then(result => result * 2)
    .then(data => console.log('Result ', data), err => console.error("Error ", err));
console.log('End')