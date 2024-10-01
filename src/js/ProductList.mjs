//This purpose of this script will be to generate a list of product cards in HTML from an array.

class ProductListing {

}

async init() {
    const list = await this.dataSource.getData();
  }

export default ProductListing {
    constructor(category, dataSource, listEl) {
        this.category = category;
        this.dataSource = dataSource;
        this.listEl = listEl;
    }
}

function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }

  renderList(productList) {
    // console.log(productList);
    // this.listElement.innerHTML = productList
    // .map((product) => productCardTemplate(product))
    // .join('');

    renderListWithTemplate(productCardTemplate, this.listElement, productList);
}
}

function productCardTemplate(product) {
return `<li class="product-card">
<a href="product_pages/index.html?product=${product.Id}">
<img
  src="${product.Image}"
  alt="Image of ${product.Name}"
/>
<h3 class="card__brand">${product.Brand.Name}</h3>
<h2 class="card__name">${product.Name}</h2>
<p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}
