"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiscountedProduct_1 = require("./models/DiscountedProduct");
const User_1 = require("./models/User");
const Product_1 = require("./models/Product");
const types_1 = require("./types");
const user1 = new User_1.User('Luiz', 'luizh', 'luiz@email.com');
const user2 = new User_1.User('Mozara', 'mo2000', 'mozara@email.com');
const product1 = new Product_1.Product('Camisa', types_1.ProductType.Clothes, 100);
const product2 = new Product_1.Product('Sapato', types_1.ProductType.Shoes, 250);
const product3 = new Product_1.Product('Armário', types_1.ProductType.Home, 3000);
const product4 = new Product_1.Product('Chinelo', types_1.ProductType.Shoes, 25);
user1.addToCart(product1);
user1.addToCart(product2);
user1.addToCart(product4);
user2.addToCart(product1);
user2.addToCart(product3);
user2.addToCart(product4);
product1.addRate(5, user1);
product1.addRate(3, user2);
product1.show();
product4.addRate(4, user1);
product4.addRate(2, user2);
console.log('\n');
product4.evaluationAverage();
console.log("Produtos no carrinho de Mozara:");
console.log(user2.showProducts());
user2.removeFromCart(product4);
console.log("Produtos no carrinho de Mozara após remover 'Chinelo':");
console.log(user2.showProducts());
product1.addComment("Muito bonita!!", user1);
product2.addComment("Adorei o sapato. Combinou com a camisa.", user1);
product3.addComment("Tamanho perfeito para meu quarto!", user2);
console.log("\nDetalhes do produto 'Camisa':");
console.log(product1.show());
console.log("Detalhes do produto 'Armário':");
console.log(product3.show());
console.log("Comentários sobre o produto 'Camisa':");
product1.showComments();
const discountedProduct = new DiscountedProduct_1.DiscountedProduct('Mesa', 750, 10);
console.log(discountedProduct.show());
console.log('\nUser2 no formato JSON:', user2.toJson());
console.log('\nProduct3 em formato JSON:', product3.toJson());
