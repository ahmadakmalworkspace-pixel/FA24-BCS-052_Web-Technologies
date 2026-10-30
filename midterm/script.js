const premiumLimit = 5200;

const grid = document.getElementById("product-grid");
const products = document.querySelectorAll(".product");
const searchBox = document.getElementById("search");
const sortButton = document.getElementById("sort-btn");
const noResults = document.getElementById("no-results");
const radios = document.querySelectorAll('input[name="category"]');

let ascending = true;

function getPrice(product) {
  const text = product.querySelector(".price").textContent;
  return parseInt(text.replace("Rs. ", ""));
}

function filterProducts() {
  const typed = searchBox.value.toLowerCase();
  const category = document.querySelector('input[name="category"]:checked').value;
  let visibleCount = 0;

  products.forEach(function (product) {
    const name = product.querySelector(".card-title").textContent.toLowerCase();
    const matchesSearch = name.includes(typed);
    const matchesCategory = category === "all" || product.dataset.category === category;

    product.classList.toggle("d-none", !matchesSearch);

    if (matchesSearch && matchesCategory) {
      visibleCount = visibleCount + 1;
    }
  });

  grid.classList.toggle("d-none", visibleCount === 0);
  noResults.classList.toggle("d-none", visibleCount !== 0);
}

function sortProducts() {
  const sorted = Array.from(products).sort(function (a, b) {
    if (ascending) {
      return getPrice(a) - getPrice(b);
    }
    return getPrice(b) - getPrice(a);
  });

  sorted.forEach(function (product) {
    grid.appendChild(product);
  });

  ascending = !ascending;
}

function addPremiumLabels() {
  products.forEach(function (product) {
    if (getPrice(product) > premiumLimit) {
      const label = document.createElement("span");
      label.textContent = "Premium";
      label.className = "badge bg-dark mb-2";
      product.querySelector(".card-body").prepend(label);
    }
  });
}

searchBox.addEventListener("input", filterProducts);

radios.forEach(function (radio) {
  radio.addEventListener("change", filterProducts);
});

sortButton.addEventListener("click", sortProducts);

addPremiumLabels();
