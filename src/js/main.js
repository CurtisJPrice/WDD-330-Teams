import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

// Create an instance of ProductData
const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductListing('tents', dataSource, element)
import ExternalServices from './ExternalServices.mjs';
import ProductListing from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';
import Alert from './Alert.mjs';

const dataSource = new ExternalServices('tents');
const listElement = document.querySelector('.product-list');
const productListing = new ProductListing('tents', dataSource, listElement);

productListing.init();
loadHeaderFooter();
new Alert();
