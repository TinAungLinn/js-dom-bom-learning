//Variables

const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance Service",
    price: 100,
  },
];

//Selectors

const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");
const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn");
// const addServiceModal = document.querySelector("#addServiceModal");
const addServiceForm = document.querySelector("#addServiceForm");
const closeServiceModalBtn = document.querySelector("#closeServiceModalBtn");
const sideBarBtn = document.querySelectorAll("#sideBarBtn");
const sideBar = document.querySelector(".side-bar");
const addServiceModal = new bootstrap.Modal("#addServiceModal");

//Process (Task)

//Function

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("service-id", service.id);
  tr.classList.add("list");
  const total = service.price * quantity;
  tr.innerHTML = `
  <td class=" d-flex justify-content-between">
  ${service.title}
  <div class="dropdown">
    <i
      class="bi bi-three-dots-vertical drop-down-btn"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
    </i>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item del-btn" href="#">Delete</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li>
        <a class="dropdown-item" href="#">Something else here</a>
      </li>
    </ul>
  </div>
  </td>
  <td class=" text-end list-quantity">${quantity}</td>
  <td class=" text-end">${service.price}</td>
  <td class=" text-end list-total">${total}</td>
  `;
  return tr;
};

const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  const subTotalCalculated = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  // console.log(subTotal);
  subTotal.innerText = subTotalCalculated;
  tax.innerText = calculateTax(subTotalCalculated);
  total.innerText = subTotalCalculated + calculateTax(subTotalCalculated);
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

//Service Option Loop

services.forEach(({ title, id }) =>
  selectService.append(new Option(title, id))
);

//Data collect from from

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(
  //   selectService.value,
  //   selectService.options[selectService.selectedIndex].innerText,
  //   quantity.valueAsNumber,
  // )
  // console.log(
  //   selectService.value,
  //   quantity.valueAsNumber,
  //   services.find((service) => service.id == selectService.value)
  // );

  const selectedService = services.find(({ id }) => id == selectService.value);

  const isExistedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  if (isExistedService) {
    const existedQuantity = isExistedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  findTotal();

  invoiceForm.reset();
  showTable();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
    findTotal();
    showTable();
  }
});

addServiceOpenBtn.addEventListener("click", () => {
  // addServiceModal.classList.remove("d-none");
  addServiceModal.show();
});

// closeServiceModalBtn.addEventListener("click", () => {
//   addServiceModal.classList.add("d-none");
// });

// adding new service with modal.
addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // update services
  const formData = new FormData(event.target);
  const id = Date.now();
  services.push({
    id,
    title: formData.get("serviceTitle"),
    price: formData.get("servicePrice"),
  });

  // update select services options
  selectService.append(new Option(formData.get("serviceTitle"), id));

  // close modal
  event.target.reset();
  addServiceModal.hide();
});

// side bar close open
sideBarBtn.forEach((el) => {
  el.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  });
});
