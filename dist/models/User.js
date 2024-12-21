"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    constructor(_name, _username, _email) {
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._id = (0, crypto_1.randomUUID)();
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get email() {
        return this._email;
    }
    addToCart(product) {
        this._cart.push(product);
        console.log(`Produto adicionado no carrinho: ${product.name}`);
    }
    removeFromCart(product) {
        const index = this._cart.indexOf(product);
        if (index !== -1) {
            this._cart.splice(index, 1);
            console.log(`\n${product.name} removido do carrinho.\n`);
        }
        else {
            console.log(`\n${product.name} não está no carrinho.\n`);
        }
    }
    showProducts() {
        let total = 0;
        this._cart.forEach((product) => {
            console.log(product.show());
            total += product.value;
        });
        return `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
            email: this._email,
        };
    }
}
exports.User = User;
