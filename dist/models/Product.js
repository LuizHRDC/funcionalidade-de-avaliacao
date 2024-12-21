"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const crypto_1 = require("crypto");
const Rating_1 = require("./Rating");
const Comment_1 = require("./Comment");
const comment_1 = require("../database/comment");
class Product {
    constructor(_name, _type, _value) {
        this._name = _name;
        this._type = _type;
        this._value = _value;
        this._id = (0, crypto_1.randomUUID)();
        this._ratings = [];
    }
    get name() {
        return this._name;
    }
    get value() {
        return this._value;
    }
    get id() {
        return this._id;
    }
    // Produto, valor e todos os comentários
    show() {
        console.log(`\n${this._name} - R$${this._value.toFixed(2)}`);
        this.showComments();
        this.evaluationAverage();
        return "\n---------------------\n";
    }
    showComments() {
        const productComments = comment_1.comments.filter((comment) => comment.product === this);
        productComments.forEach((comment) => {
            console.log(`[${comment.from.username}]: ${comment.content}`);
        });
    }
    addComment(content, user) {
        const comment = new Comment_1.Comment(user, this, content);
        comment_1.comments.push(comment);
    }
    addRate(rate, user) {
        if (rate < 0 || rate > 5) {
            console.log('Sua avaliação deve ser entre 0 e 5');
            return;
        }
        const rating = new Rating_1.Rating(rate, user);
        this._ratings.push(rating);
        console.log(`\nAvaliação de nota ${rate} adicionada por ${user.username} sobre o produto: ${this.name}`);
    }
    evaluationAverage() {
        // Verifica se há avaliações para calcular a média
        if (this._ratings.length === 0) {
            console.log('Ainda não há avaliações para esse produto.');
            return;
        }
        // Somando todas as avaliações
        const totalRatings = this._ratings.reduce((sum, rating) => sum + rating.rate, 0);
        // Calculando a média
        const average = totalRatings / this._ratings.length;
        // Exibindo a média com 2 casas decimais
        console.log(`Nota média de ${this._name}: ${average.toFixed(2)}\n`);
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            price: this._value,
            type: this._type,
        };
    }
}
exports.Product = Product;
