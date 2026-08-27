/* Exercise 2 — Product names
Return an array containing only product names. Use map(). 
*/

// function getProductNames(products) {
//   const mapProducts = products.map(o =>  o.name);
//   return mapProducts;
// };

// const products = [
//   {
//     name: 'alpha',
//     id: 1,
//     cost: 22
//   },
//   {
//     name: 'beta',
//     id: 20,
//     cost: 67
//   },
//   {
//     name: 'gamma',
//     id: 13,
//     cost: 8
//   }
// ];

// console.log(getProductNames(products));


/* Exercise 3 — Affordable products
Return products whose prices do not exceed the supplied limit. Use filter().
*/

// function getAffordableProducts(products, maximumPrice) {
//   return products.filter(o => o.cost <= maximumPrice );
// }

// const products = [
//   {
//     name: 'ek',
//     id: 1,
//     cost: 12
//   },
//   {
//     name: 'do',
//     id: 2,
//     cost: 244
//   },
//   {
//     name: 'teen',
//     id: 3,
//     cost: 33
//   }
// ];

// console.log(getAffordableProducts(products, 25)); // [ { name: 'ek', id: 1, cost: 12 } ]


/* Exercise 4 — Find product 
Return the matching product. Use find().
Test a nonexistent ID as well.
*/

// function findProductById(products, id) {
//   return products.find(o => o.id === id);
// }

// const products = [
//   {
//     name: 'ek',
//     id: 1,
//     cost: 12
//   },
//   {
//     name: 'do',
//     id: 2,
//     cost: 244
//   },
//   {
//     name: 'teen',
//     id: 3,
//     cost: 33
//   }
// ];

// console.log(findProductById(products, 2)); // { name: 'do', id: 2, cost: 244 }
// console.log(findProductById(products, 6)); // undefined


/* Exercise 5 — Stock check
Return whether at least one product has zero stock. Use some().
*/
// function hasOutOfStockProduct(products) {
//   return products.some(o => o.stock === 0);
// }

// const products = [
//   {
//     name: 'ek',
//     id: 1,
//     cost: 12,
//     stock: 90
//   },
//   {
//     name: 'do',
//     id: 2,
//     cost: 244,
//     stock: 0
//   },
//   {
//     name: 'teen',
//     id: 3,
//     cost: 33,
//     stock: 12
//   }
// ];
// console.log(hasOutOfStockProduct(products)); // true


/* Exercise 6 — Price validation
Return whether every product has a positive numeric price. Use every().
*/

// function areAllPricesValid(products) {
//   return products.every(o => !(o.price < 0) )
// }
// const products = [
//   {
//     name: 'ek',
//     id: 1,
//     price: 12,
//     stock: 90
//   },
//   {
//     name: 'do',
//     id: 2,
//     price: 244,
//     stock: 0
//   },
//   {
//     name: 'teen',
//     id: 3,
//     price: -33,
//     stock: 12
//   }
// ];

// console.log(areAllPricesValid(products)); // false

/* Exercise 7 — Inventory value 
for all products and return the total. Use reduce().
*/
// function getTotalInventoryValue(products) {
//   return products.reduce((a, obj) =>  a + obj.price*obj.stock, 0); 
// }

// const products = [
//   {
//     name: 'ek',
//     id: 1,
//     price: 12,
//     stock: 9
//   },
//   {
//     name: 'do',
//     id: 2,
//     price: 244,
//     stock: 0
//   },
//   {
//     name: 'teen',
//     id: 3,
//     price: 33,
//     stock: 2
//   }
// ];

// console.log(getTotalInventoryValue(products)); // 174


/* Exercise 8 — Apply discount immutably
Return a new array containing new discounted product objects.
The original array and its product objects must remain unchanged.
*/