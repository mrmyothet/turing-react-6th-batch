// Revealing Module Pattern
// ES6 - have custom modules

window.MyModule =
  window.MyModule ||
  (function () {
    console.log('Module initialized');

    function method() {
      console.log('Internal method');
    }

    return {
      api: method,
    };
  })();
