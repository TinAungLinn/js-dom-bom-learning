const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const record = document.getElementById("record");

// Function
const clearResult = _ => result.innerText = null;
const calculateResult = _ => {
    const area = width.valueAsNumber * breadth.valueAsNumber;

    result.innerText = `w : ${width.valueAsNumber}ft * b : ${breadth.valueAsNumber}ft = ${area}sqft`;

    width.value = breadth.value  = null;
    // width.valueAsNumber = breadth.valueAsNumber = null;
};
const storeResult = () => {
    record.innerHTML += `<li>${result.innerText}</li>`;
    clearResult();
};

// Process
calculate.onclick = calculateResult;

clear.onclick = () => clearResult();

store.onclick = storeResult;

