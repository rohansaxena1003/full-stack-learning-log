/* 
Write JavaScript that:
1. Renders one article for every product.
2. Displays the product’s name, price, and stock status.
3. Adds data-id to every product article.
4. Adds an out-of-stock class when unavailable.
5. Creates a Toggle Stock button for every product.
6. Updates the matching object using map().
7. Re-renders after toggling stock.
8. Shows all products when All Products is clicked.
9. Shows only available products when Available Products is clicked.
10. Displays the number of available products.
11. Shows an empty message when no products match.
Attempt it before checking the answer.
*/

let products = [
    {
        id: 1,
        name: "Keyboard",
        price: 1500,
        inStock: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 700,
        inStock: false
    },
    {
        id: 3,
        name: "Monitor",
        price: 12000,
        inStock: true
    }
];

const taskList = document.createElement("ul");
const showAll = document.querySelector("#show-all");
const showAvailable = document.querySelector("#show-available");
const productList = document.querySelector("#product-list");
const productSummary = document.querySelector("#product-summary");

function createToggleStockButton() {
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle");
  toggleButton.textContent = "Toggle button";
  return toggleButton;
}

// render();

function render() {
  productList.replaceChildren();

  products.forEach((p) => {
    console.log(p);
    // 1
    const article = document.createElement("article");
    article.textContent = `Name: ${p.name}, Price: ${p.price}, Stock available: ${p.inStock ? "YES" : "NO"}`;
    article.dataset.id = p.id; // 3
    const toggleStockbtn = createToggleStockButton(); // 5

    // 6
    toggleStockbtn.addEventListener("click", handleToggle);
    article.append(toggleStockbtn);
    
    if(!p.inStock) {
      article.classList.add("out-of-stock"); // 4
    }
    productList.appendChild(article); // 2

  });
}

const toggleButtons = document.querySelectorAll(".toggle");
toggleButtons.forEach( (tb) => {
  tb.addEventListener("click", handleToggle);
});

function handleToggle(e) {
  const taskId = e.srcElement.parentElement.dataset.id;
  // console.log(e.srcElement.parentElement);
  // console.log(taskId);
  let availableCount = 0;
  products = products.map((p) =>  {
    // console.log(p);
    if(p.id == taskId) {
      p.inStock = !(p.inStock);
    }
    if(p.inStock) {
      availableCount++;
    }
    return p;
  });
  console.log(products);

  render(); // 7
  if(availableCount == 0) { // 10
    productSummary.textContent = 'No products available';
  } 
}

showAll.addEventListener("click", render); // 8

// 9
showAvailable.addEventListener("click", displayOnlyInStock);

function displayOnlyInStock() {
  const allProducts = products;
  const availableProducts = products.filter( (p) => {
    if(p.inStock) {
      return p;
    }
  });
  console.log(availableProducts);
  products = availableProducts;
  render();
  products = allProducts;
}