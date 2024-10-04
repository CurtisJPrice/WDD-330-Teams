import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

// Create an instance of ProductData
const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductListing('tents', dataSource, element)
