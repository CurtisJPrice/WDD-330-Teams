// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }
  // or a more concise version if you are into that sort of thing:
  // export const qs = (selector, parent = document) => parent.querySelector(selector);
  
  // retrieve data from localstorage
  export function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value): [];
  }
  // save data to local storage
  export function setLocalStorage(key, data) {
    let oldData = getLocalStorage(key) || [];
    oldData.push(data);
    localStorage.setItem(key, JSON.stringify(data));
  }
  // set a listener for both touchend and click
  export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    qs(selector).addEventListener("click", callback);
  }

  export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
  }

  export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    if (clear) {
      parentElement.innerHTML = '';
    }
    
    parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
  }

  export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);

    if (callback) {
      callback(data);
    }
  }

  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }

  export async function loadHeaderFooter() {
    const headerFile = await loadTemplate('../partials/header.html');
    const footerFile = await loadTemplate('../partials/footer.html');

    const headerDOM = document.querySelector('#main-header');
    const footerDOM = document.querySelector('#main-footer');

    renderWithTemplate(headerFile, headerDOM);
    renderWithTemplate(footerFile, footerDOM);
  }

  export function alertMessage(message, scroll = true) {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.innerHTML = `<span>${message}</span> <button class="close-btn">X</button>`;

    alert.querySelector('.close-btn').addEventListener('click', function () {
        alert.remove();
    });

    const main = document.querySelector('main');
    main.prepend(alert);

    if (scroll) {
        window.scrollTo(0, 0);
    }
}