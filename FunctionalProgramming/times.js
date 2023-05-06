const times = (noOfloop, fn) => {
  for (let i = 0; i < noOfloop; i++) {
    fn();
  }
};

times(3, console.log);
