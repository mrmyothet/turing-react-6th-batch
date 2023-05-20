function callback(result) {
  console.log('Callback executed ', result);
}

function doAsync(func) {
  console.log('Functon called');
  setTimeout(() => {
    console.log('Execute after 1 second');
    func(100);
  }, 1000);
}

let result = doAsync(callback);
console.log(result); // undefined

// Must use Functional Error Handling for asynchronous code
