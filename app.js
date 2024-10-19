let currency = prompt("Choose currency: ");
let amount = parseInt(prompt("Enter the amount"));
let rate;

if (currency == "Dollar" || currency == "Pound" || currency == "Euro") {
  switch (currency) {
    case "Dollar":
      rate = 120;
      break;
    case "Pound":
      rate = 150;
      break;
    case "Euro":
      rate = 130;
      break;
  }
  rate *= amount;
  document.write(`<h1> ${amount} ${currency} = ${rate} BDT </h1>`);
} else {
  document.write(`<h1> Put A valid Currency from the list</h1>`);
}
