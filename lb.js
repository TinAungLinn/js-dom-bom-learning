const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");
const data = [
  "Sar pe pe lar",
  "Morning",
  "Goodnight",
  "Read book",
  "Learn JavaScript",
];

// function

const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(el => el.querySelector(".form-check-input").checked === true).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
}

const createLi = (text) => {
  const li = document.createElement("li");
  const dynamicId = "flexCheck" + Math.random();
  // li.addEventListener("dblclick", edit);
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";
  li.innerHTML = `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${dynamicId}" onchange="done(event)">
        <label class="form-check-label" for="${dynamicId}">
            ${text}
        </label>
    </div>
    <div class="btn-group">
      <button class=" btn btn-sm btn-outline-dark" onclick="edit(event)">
        <i class="bi bi-pencil"></i>
      </button>
      <button class=" btn btn-sm btn-outline-dark" onclick="del(event)">
        <i class="bi bi-trash3 pe-none"></i>
      </button>
    </div>
    `;
  return li;
};

const del = (event) => {
  if (confirm("Are U sure to delete?")) {
    event.target.closest("li").remove();
    counter();
  }
};

data.forEach((d) => lists.append(createLi(d)));

const edit = (event) => {
  const old = event.target.closest("li").querySelector(".form-check-label");
  const newtext = prompt("Input new text", old.innerText);
  if(newtext && newtext.trim()){
    old.innerText = newtext;
  };
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
  } else {
    alert("Input text is empty.");
  }
};

// Action

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});


window.addEventListener("load",counter);