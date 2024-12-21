"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
const Product_1 = require("./Product");
const types_1 = require("../types");
class DiscountedProduct extends Product_1.Product {
    constructor(name, value, _discount) {
        super(name, types_1.ProductType.Shoes, value);
        this._discount = _discount;
    }
    get discount() {
        return this._discount;
    }
    get discountedPrice() {
        return this.value - ((this.value * this._discount) / 100);
    }
    show() {
        return `\nProduto: ${this.name} \n Preço original: R$${this.value.toFixed(2)} \n Preço com desconto: R$${this.discountedPrice.toFixed(2)} \n Desconto de ${this.discount}`;
    }
}
exports.DiscountedProduct = DiscountedProduct;
