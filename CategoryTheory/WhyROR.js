function div(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('a or b is NaN');
  } else {
    return a / b;
  }
}

try {
  let result = div(10, NaN);
} catch (e) {
  console.log('Error', e);
}

// try catch only do - synchronous code
