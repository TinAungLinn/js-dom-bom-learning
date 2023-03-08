// const arr = ["a", "b", "c", "d", "e"];
// const obj = {
//   brand: "apple",
//   model: "macbook",
//   spec: {
//     cpu: "i7",
//     ram: "16GB",
//     ssd: "1TB",
//   },
// };

// const j = '["a", "b", "c", "d", "e"]';
// const j2 = `{
//     "brand": "apple",
//     "model": "macbook",
//     "spec": {
//       "cpu": "i7",
//       "ram": "16GB",
//       "ssd": "1TB"
//     }
//   }`;

//   console.log(JSON.parse(j));
//   console.log(JSON.parse(j2));

function run() {
  const req = new XMLHttpRequest();

  // console.log(req);

  req.open("GET", "./js/data.json");
  req.send();
  req.addEventListener("load", (event) => {
    console.log(JSON.parse(event.target.responseText));
  });
};
