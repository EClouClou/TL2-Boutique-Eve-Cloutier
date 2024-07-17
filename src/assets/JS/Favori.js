export default class Favori {
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

    toCardFavoriHtml (){
        const favorisHtml = document.createElement('div');
        const imgHtml = document.createElement('img');
        const nameHtml = document.createElement('p');
        const plusHtml = document.createElement('button');
        const shortDescrHtml = document.createElement('p');
        const priceAndCartHtml = document.createElement('div');
        const priceHtml = document.createElement('span');
        const btnAddToCartHtml = document.createElement('img');

        favorisHtml.classList.add('favorite-list'); 
        favorisHtml.className = 'grid place-items-center'

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
        shortDescrHtml.classList.add('favori-short-description');

        priceAndCartHtml.className = 'flex flex-row items-center gap-6';

        priceHtml.textContent = this.price;
        priceHtml.className = 'font-bold text-blackBrown flex';

        btnAddToCartHtml.textContent = this.cart
        btnAddToCartHtml.setAttribute('src', this.cart);
        btnAddToCartHtml.className = 'w-[24px] flex';

        priceAndCartHtml.appendChild(priceHtml);
        priceAndCartHtml.appendChild(btnAddToCartHtml);

        favorisHtml.appendChild(imgHtml);
        favorisHtml.appendChild(nameHtml);
        favorisHtml.appendChild(plusHtml);
        favorisHtml.appendChild(shortDescrHtml);
        favorisHtml.appendChild(priceAndCartHtml);

        return favorisHtml;
    }
}

