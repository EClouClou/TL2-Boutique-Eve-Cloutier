import Product from "./Product";

export default class LineItem{
    constructor(product, quantity){
        /** @type {Product} */
        this.product = product;
        /** @type {number} */
        this.quantity = quantity;
    }
}