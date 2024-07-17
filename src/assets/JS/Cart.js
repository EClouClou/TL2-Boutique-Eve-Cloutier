import LineItem from "./LineItem";

export default class Cart{
    constructor(){
        /** @type {number} */
        this.total = 0;
        /** @type {LineItem[]} */
        this.lineItems = [];
    }
}
