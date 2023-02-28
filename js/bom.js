//(Inner/Outer width/height)
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

//(Scroll)
// console.log(scrollY);
// window.addEventListener("scroll", () => {
//   console.log(scrollY);
// });

//(setTimeOut/setInterval)
// const clock = document.querySelector("#clock");
// const run = () => {
//   const d = new Date();
//   clock.innerText =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };
// // setTimeout(run, 3000);
// setInterval(run, 1000);
// const date = new Date();
// console.dir(date);

const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");

// let run;

// clockStart.addEventListener("click", () => {
//   run = setTimeout(() => console.log("hello"), 3000);
// });

// clockStop.addEventListener("click", () => {
//   clearTimeout(run);
// });

// function test(start, stop) {
//   let i = start;
//   const run = setInterval(() => {
//     console.log("hello", ++i);
//     if ((i === stop)) {
//       clearInterval(run);
//     }
//   }, 1000);
// }

clockStart.addEventListener("click",() => {
  scrollTo(0,document.querySelector("#to").getBoundingClientRect().y)
})

