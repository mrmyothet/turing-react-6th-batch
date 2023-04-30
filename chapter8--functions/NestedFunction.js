function outer() {
  console.log('Outer called');
  function inner() {
    console.log('Inner function');
  }
  inner();
}
outer();

// related with closure
