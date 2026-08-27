// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter product name: ", (input) => {
//   const num = Number(input);
//   // console.log(input);
//   rl.close();
// });
// console.log(name);



// console.log(typeof calculator.price);
const name = "Keyboard";
const price = 1500.00;
const quantity = 2;
const couponCode = "SAVE50";
const isMember = true;
const discount = 10;
function calculateSubtotal(price, quantity) {
  return price * quantity;
}


function validateInputs(price, quantity) {
  console.log(typeof price);
  if(typeof price === 'number' && typeof quantity === 'number') {
    return true;
  } else {
    return false;
  }
}


function calculateDiscount(subtotal, isMember, couponCode) {
  let totalDiscount = 0;
  if(isMember) {
    totalDiscount = (discount*subtotal)/100;
  } 
  if( couponCode=== "SAVE50") {
    totalDiscount += 50;
  }
  return totalDiscount;
}

function calculateTax(amountAfterDiscount, taxRate = 0.18) {
  return amountAfterDiscount * taxRate;
}

function formatCurrency(amount) {
  return amount/90;
}


const inputs = validateInputs(price, quantity);
if(inputs) {
  const subTotal = calculateSubtotal(price, quantity);
  const discount = calculateDiscount(subTotal, isMember,  couponCode);
  const amountAfterDiscount = Math.max(0, subTotal - discount);
  const tax = calculateTax(amountAfterDiscount);
  const finalCost = amountAfterDiscount + tax;

  console.log(`name = ${name}`);
  console.log(`Price = ${price}`);
  console.log(`subtotal = ${subTotal}`);
  console.log(`Total discount: = ${discount}`);
  console.log(`tax = ${tax}`);
  console.log(`Final total = ${finalCost}`);
} else {
  console.log("Wrong input");
}