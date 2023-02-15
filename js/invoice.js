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

const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");

//Process (Tesks)

//Service Option Loop

services.forEach((service) =>
  selectService.append(new Option(service.title, service.price))
);

//Data collect from from

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
});
