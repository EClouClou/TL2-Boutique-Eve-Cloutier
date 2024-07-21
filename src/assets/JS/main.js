/*import '../CSS/style.css'
import products from './products';
import favoris from './favoris';
import './dialog';
import Cart from './Cart';
import LineItem from './LineItem';
import Product from './Product';
import Favori from './Favori';
import './newsletter';
import './search';
import './contact';
import './modal';

const cart = new Cart();
const lineItem = new LineItem(new Product('Test'), 10);

const productsContainer = document.querySelector('.products-container');

products.forEach((product) => {
    productsContainer.appendChild(product.toCardHtml())
});

const favorisContainer = document.querySelector('.favoris-container');

favoris.forEach((favori) => {
    favorisContainer.appendChild(favori.toCardFavoriHtml())
});*/

// Importations nécessaires
import '../CSS/style.css';
import products from './products';
import favoris from './favoris';
import './dialog';
import Cart from './Cart';
import LineItem from './LineItem';
import Product from './Product';
// code inutile -0.5
import './newsletter';
import './search';
import './contact';
import './modal';

const cart = new Cart();
const lineItem = new LineItem(new Product('Test'), 10);

const productsContainer = document.querySelector('.products-container');

if (productsContainer) {
    products.forEach((product) => {
        productsContainer.appendChild(product.toCardHtml());
    });
}

const favorisContainer = document.querySelector('.favoris-container');

if (favorisContainer) {
    favoris.forEach((favori) => {
        favorisContainer.appendChild(favori.toCardFavoriHtml());
    });
}

