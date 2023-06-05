let timer, timer2;
timer = setInterval(() => {
  document.getElementById("lblTime").innerText = new Date();
  console.log(new Date());
}, 1000);

document.getElementById("btnStop").addEventListener("click", () => {
  clearInterval(timer);
});

timer2 = setTimeout(() => {
  console.log("Timer timeout", new Date());
}, 3000);

document.getElementById("btnStop2").addEventListener("click", () => {
  clearTimeout(timer2);
});
