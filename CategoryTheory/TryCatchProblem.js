// Asynchornous flow
// functon called - delayed execution

function doAsync() {
  console.log('Functon called');
  setTimeout(() => {
    console.log('Execute after 1 second');
    throw new Error('Something went wrong');
  }, 1000);
}

try {
  doAsync();
} catch (e) {
  console.log('Catch block e', e);
}

console.log('After called');

// Try Catch cannot detect asynchronous code - error
