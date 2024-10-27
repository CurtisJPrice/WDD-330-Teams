import ExternalServices from './ExternalServices.mjs';
import ProductListing from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';
import Alert from './Alert.mjs';
import AlertSignup from './alertDialog.mjs';


const dataSource = new ExternalServices('tents');
const listElement = document.querySelector('.product-list');
const productListing = new ProductListing('tents', dataSource, listElement);
const alert = new Alert();
const alertsignup = new AlertSignup();

productListing.init();
loadHeaderFooter();
alert.init();
alertsignup.init();

document.addEventListener('DOMContentLoaded', () => {
    new AlertSignup(); // Create an instance when the DOM is fully loaded
});


