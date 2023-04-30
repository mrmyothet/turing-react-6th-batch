function display(msg, another) {
  console.log(display.length); // 2
  console.log(arguments.length);
  console.log(msg);
  console.log(another);

  // requirement - type safety - want to pass all parameters
  // length vs arguments lenght - trick
  if (display.length > arguments.length) {
    console.warn(
      `Only ${arguments.length} is supplied but required ${display.length}`
    );
  }
}

display();
display('message');
display('message', 'another');
