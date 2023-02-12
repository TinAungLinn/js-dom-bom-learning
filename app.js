


// const input = window.prompt();

// window.alert(input);

// const width = window.prompt("Input Width");
// const breadth = window.prompt("Input Breadth");
// const area = width * breadth;

// window.alert("Area is " + area + "sqft.");

// const run = (x,y) => {
//     window.alert(typeof x);
//     window.alert(typeof y);
//     return parseFloat(x) + parseFloat(y);
// }

// const X = window.prompt("Input X...");
// const Y = window.prompt("Input Y...");

// window.alert(run(X,Y));

// const answer = window.confirm("ထမင်းစားပြီးပြီလား?.....");

// window.alert(answer ? "စားပြီးပြီ" : "စားရသေးဘူး");

// const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter",() => console.log("Mouse enter event"));
// h1.addEventListener("mouseout",() => console.log("Mouse out event"));
// h1.addEventListener("mousemove",() => console.log("Mouse move event"));

const input = document.querySelector("input");

input.addEventListener("keydown",() => console.log("KeyDown Event"));
input.addEventListener("keyup",() => console.log("KeyUp Event"));
input.addEventListener("keypress",() => console.log("KeyPress Event"));