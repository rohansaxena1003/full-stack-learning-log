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

let availableCount = 0;
const taskList = document.createElement("ul");
const showAll = document.querySelector("#show-all");
const showAvailable = document.querySelector("#show-available");
const productList = document.querySelector("#product-list");
const productSummary = document.querySelector("#product-summary");


function createToggleStockButton(p) {
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle");
  toggleButton.dataset.action = "toggle"; // ex6 - 1
  toggleButton.dataset.id = p.id; // ex6 - 2
  toggleButton.textContent = "Toggle button";
  return toggleButton;
}

function createArticle(p) {
  const article = document.createElement("article");
  article.textContent = `Name: ${p.name}, Price: ${p.price}, Stock available: ${p.inStock ? "YES" : "NO"}`;
  article.dataset.id = p.id; // 3
  return article;
}

// render();

function render() {
  
  productList.replaceChildren();

  products.forEach((p) => {
    // console.log(p);
    const article = createArticle(p); // 1
    const toggleStockbtn = createToggleStockButton(p); // 5

    // 6
    // toggleStockbtn.addEventListener("click", handleToggle);
    article.append(toggleStockbtn);
    
    if(!p.inStock) {
      article.classList.add("out-of-stock"); // 4
    }
    productList.appendChild(article); // 2

  });
}

const toggleButtons = document.querySelectorAll(".toggle");

// Exercise for topic 6
/* Your Topic 6 exercise is to remove that individual listener.
Instead:
1. Give every Toggle Stock button a data-action.
2. Give every button its product ID.
3. Attach one listener to productList.
4. Use event.target.closest() to find the button.
5. Return when the click did not come from a relevant button.
6. Read the product ID.
7. Call your existing toggleStock() function.
Do not rewrite the entire Product Renderer. Refactor only its event handling.
*/

// toggleButtons.forEach( (tb) => {
//   tb.addEventListener("click", handleToggle);
// });
productList.addEventListener("click", handleToggle); // ex6 - 3

function handleToggle(e) {
  e.preventDefault();
  // const currentBtn = e.target;
  // console.log(e.target);
  // console.log(e.target.closest(".toggle"));
  if(e.target.dataset.action !== 'toggle') { // ex6 - 5
    console.log("trtr");
    return;
  }

  const taskId = e.srcElement.parentElement.dataset.id;
  // console.log(e.srcElement.parentElement);
  console.log(taskId);
  availableCount = 0;
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
  // console.log(products);

  render(); // 7
  displayCount(availableCount);
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

function displayCount(availableCount) {
  if(availableCount == 0) { // 10
    productSummary.textContent = 'No products available';
  } else {
    productSummary.textContent = `${availableCount} products available`;
  }
}