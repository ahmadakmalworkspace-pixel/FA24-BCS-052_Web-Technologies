const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const products = require("./products");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "layout"); // views/layout.ejs is the shared shell for every page
app.use(express.static("public")); // serves /style.css, /script.js and /images/...
app.use(express.urlencoded({ extended: true })); // parses an HTML <form> POST body into req.body

// Home page: product grid
app.get("/", (req, res) => {
  res.render("index", {
    title: "teenage engineering - Store",
    products,
    pageScript: "/script.js" // only the home page needs the search/sort/filter script
  });
});

// One route serves every product page
app.get("/products/:slug", (req, res, next) => {
  const product = products.find((p) => p.slug === req.params.slug);
  if (!product) return next(); // falls through to the 404 below
  res.render("product", {
    title: `${product.name} - teenage engineering`,
    product
  });
});

// Anything else
app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found - teenage engineering" });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`EJS Tasks app listening on http://localhost:${PORT}`);
});
