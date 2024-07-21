import products from "./products";

//code inutile -0.5
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// Js doc inutile -0.5
document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', event => {
        const productName = event.target.getAttribute('data-product');
        const product = products.find(prod => prod.name === productName);

        modalContent.innerHTML = '';

        const detailsHtml = product.toCardHtml();
        modalContent.appendChild(detailsHtml);

        modal.classList.add('open');
    });
});

// Js doc inutile -0.5
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});