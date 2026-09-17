"use strict";

function testFunction() {
  const tipDetails = [];

  const waiterList = document.getElementById("waiterList").value;
  const tableNo = document.getElementById("tableNo").value;
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  tipDetails.push(waiterList, tableNo, amount, currency);

  console.log(tipDetails);
  //splitArray(tipDetails);
}

/*(function splitArray(details) {
  tipDetails.forEach((item) => {
    if (typeof item === "number") {
      amountDetails.push(item);
      console.log(amountDetails);
    }
  });

  return details;
} */
