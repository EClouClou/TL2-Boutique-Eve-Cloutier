export default class Product {
    constructor(
        img, 
        name,
        plus,
        shortDescr, 
        price, 
        cart
    ) {
    this.img = img;
    this.name = name;
    this.plus = plus;
    this.shortDescr = shortDescr;
    this.price = price;
    this.cart = cart;
    }

    toCardHtml (){
        const carteHtml = document.createElement('div');
        const imgHtml = document.createElement('img');
        const nameHtml = document.createElement('p');
        const plusHtml = document.createElement('button');
        const shortDescrHtml = document.createElement('p');
        const priceAndCartHtml = document.createElement('div');
        const priceHtml = document.createElement('span');
        const btnAddToCartHtml = document.createElement('img');

        carteHtml.classList.add('article-list'); 
        carteHtml.className = 'grid place-items-center'

        imgHtml.textContent = this.img;
        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.name);
        imgHtml.className = 'max-w-[80%] md:max-w-[60%] lg:max-w-[80%]';

        nameHtml.textContent = this.name; 
        nameHtml.className = 'font-bold text-blackBrown text-base pt-3';
        nameHtml.setAttribute('data-search', this.name);

        plusHtml.textContent = this.plus;
        plusHtml.setAttribute('data-product', this.name);
        plusHtml.classList.add('btnDetails');
        plusHtml.className = 'font-semibold text-blackBrown py-3 hover:underline';

        shortDescrHtml.textContent = this.shortDescr;
        shortDescrHtml.className = 'py-3 hidden';
        shortDescrHtml.classList.add('product-short-description');

        priceAndCartHtml.className = 'flex flex-row items-center gap-6';

        priceHtml.textContent = this.price;
        priceHtml.className = 'font-bold text-blackBrown flex';

        btnAddToCartHtml.textContent = this.cart
        btnAddToCartHtml.setAttribute('src', this.cart);
        btnAddToCartHtml.className = 'w-[24px] flex';

        priceAndCartHtml.appendChild(priceHtml);
        priceAndCartHtml.appendChild(btnAddToCartHtml);

        carteHtml.appendChild(imgHtml);
        carteHtml.appendChild(nameHtml);
        carteHtml.appendChild(plusHtml);
        carteHtml.appendChild(shortDescrHtml);
        carteHtml.appendChild(priceAndCartHtml);

        return carteHtml;
    }
}

