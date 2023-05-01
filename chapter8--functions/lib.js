// let b = 200;

// Module Pattern

// IIFE -
// + means to execute immediately
// +(function () {

window.myModule =
  window.myModule ||
  (function () {
    console.log('Module loaded');

    function push() {
      console.log('Push');
    }

    function pop() {
      console.log('Pop');
    }

    return {
      push,
      pop,
    };
  })();
