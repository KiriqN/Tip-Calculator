"use strict";

//Check for empty values in the different fields

document.getElementById("tipCalc").addEventListener("submit", function (e) {
  const fields = this.querySelectorAll("input, select");
  let hasEmpty = false;

  fields.forEach((field) => {
    if (!field.value.trim()) {
      console.log(field.tagName, field.classList.contains("error"));
      hasEmpty = true;
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  });

  if (hasEmpty) {
    e.preventDefault();
  } else {
    e.preventDefault();
    getValues();
  }
});

//once values are detected getValues is called to grab values for calculations

function getValues() {
  const tipDetails = [];

  const waiterList = document.getElementById("waiterList").value;
  const tableNo = document.getElementById("tableNo").value;
  const amount = document.getElementById("amount").valueAsNumber;
  const currency = document.getElementById("currency").value;

  tipDetails.push(waiterList, tableNo, amount, currency);
  calcTip(tipDetails);
  //console.log(tipDetails);
}

//Calculate tip based on info and value

function calcTip(tip) {
  const [waiter, tableNo, billAmount, Currency] = tip;
  const tipAmount = billAmount * 0.1;
  const total = tipAmount + billAmount;
  console.log(tipAmount);
  console.log(total);
}
