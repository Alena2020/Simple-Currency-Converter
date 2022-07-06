const currencies = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36,  GBP: 0.75};
let input = require('sync-input');

console.log("Welcome to Currency Converter!");
for (const currency in currencies) {
  console.log(`1 USD equals  ${currencies[currency]} ${currency}`);  
}
console.log("What do you want to convert?");

let currencyFrom = input("From:").toUpperCase();
if (currencies[currencyFrom] === undefined) {
  console.log("Unknown currency");
} else {
  let currencyTo  = input("To:").toUpperCase();
  if (currencies[currencyTo] === undefined) {
    console.log("Unknown currency");
  } else {
      let amount = Number(input("Amount:"));
      if (isNaN(amount)) {
          console.log("The amount has to be a number");
      } else if (amount < 1) {
          console.log("The amount can not be less than 1.");
      } else {
          console.log(`Result: ${amount} ${currencyFrom} equals ${(amount / currencies[currencyFrom] * currencies[currencyTo]).toFixed(4)} ${currencyTo}`);
    }
  }
}