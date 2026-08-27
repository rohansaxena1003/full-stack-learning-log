/* Exercise 8 — Apply discount immutably
Return a new array containing new discounted product objects.
The original array and its product objects must remain unchanged.
*/

function applyDiscount(products, discountPercentage) {
  const newArr = products.map(obj => {
    const newObj = {...obj}
    // console.log(newObj);
    let price = newObj.price;
    price = price - (price*discountPercentage)/100;
    newObj.price = price;
    return newObj;
  });
  return newArr;
}

const products = [
  {
    name: 'ek',
    id: 1,
    price: 12,
    stock: 9
  },
  {
    name: 'do',
    id: 2,
    price: 244,
    stock: 0
  },
  {
    name: 'teen',
    id: 3,
    price: 33,
    stock: 2
  }
];

console.log(products); /* [
  { name: 'ek', id: 1, price: 12, stock: 9 },
  { name: 'do', id: 2, price: 244, stock: 0 },
  { name: 'teen', id: 3, price: 33, stock: 2 }
] */

console.log(applyDiscount(products, 15)); /* [
  { name: 'ek', id: 1, price: 10.2, stock: 9 },
  { name: 'do', id: 2, price: 207.4, stock: 0 },
  { name: 'teen', id: 3, price: 28.05, stock: 2 }
] */

console.log(products); /* [
  { name: 'ek', id: 1, price: 12, stock: 9 },
  { name: 'do', id: 2, price: 244, stock: 0 },
  { name: 'teen', id: 3, price: 33, stock: 2 }
] */