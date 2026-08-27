
products = [
  {
    id: 0,
    name: 'alpha',
    category: 'a',
    price: 5000,
    stock: 12,
    details: {
      brand: 'one',
      rating: '***'
    }
  },
  {
    id: 1,
    name: 'beta',
    category: 'a',
    price: 2000,
    stock: 0,
    details: {
      brand: 'two',
      rating: '****'
    }
  },
  {
    id: 2,
    name: 'gamma',
    category: 'b',
    price: -2700,
    stock: 44,
    details: {
      brand: 'two',
      rating: '*'
    }
  },
  {
    id: 3,
    name: 'delta',
    category: 'a',
    price: 1800,
    stock: 10,
    details: {
      brand: 'one'
    }
  },
  {
    id: 4,
    name: 'omega',
    category: 'c',
    price: 4000,
    stock: -5,
    details: {
      brand: 'three',
      rating: '*****'
    }
  }, 
  {
    id: 5,
    name: 'epsilon',
    category: 'b',
    price: 3300,
    stock: 20,
    details: {
      brand: 'one',
      rating: '****'
    }
  }
];

function filterProductByCategory(products, category) {
  return products.filter(p => p.category === category);
}

function filterProductByMaxPrice(products, maxPrice) {
  return products.filter(p => p.price <= maxPrice);
}

function findProductByID(products, id) {
  return products.find(p => p.id === id);
}

function anyProductOutOfStock(products) {
  return products.some(p => p.stock <= 0);
}

function validPrice(products) {
  return products.every(p => p.price > 0);
}

// let count = 0;
function calculateTotal(a,p) {
  // console.log(a);
  // console.log(p);
  // count++;
  // console.log(count);
  if(p.price > 0 && p.stock > 0) {
    a = a + p.stock*p.price;
  } 
  return a;
}

function totalInventoryValue(products) {
  return products.reduce(calculateTotal, 0);
}

function discountedProducts(products, discount) {
  return products.map(p => {
    const newP = {...p};
    newP.price -= (newP.price * discount)/100;
    // console.log(newP);
    return newP;
  });
}

function displayRating(products) {
  for(p of products) {
    console.log(`id: ${p.id}, name: ${p.name}, rating: ${p.details?.rating ?? "Not rated"}`);
  }
}

const category = filterProductByCategory(products, 'c');
// console.log(category);

const price = filterProductByMaxPrice(products, 3000);
// console.log(price);

const findProduct1 = findProductByID(products, 2);
// console.log(findProduct1);
const findProduct2 = findProductByID(products, 10);
// console.log(findProduct2);

const outOfStock = anyProductOutOfStock(products);
// console.log(outOfStock); // true

const isPriceValid = validPrice(products);
// console.log(isPriceValid); // false

const total = totalInventoryValue(products);
// console.log(total); // 144000

const newProducts = discountedProducts(products, 20);
// console.log(newProducts);
// console.log(products);

displayRating(products);