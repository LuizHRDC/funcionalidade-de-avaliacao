"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const crypto_1 = require("crypto");
class Comment {
    constructor(_from, _product, _content) {
        this._from = _from;
        this._product = _product;
        this._content = _content;
        this._id = (0, crypto_1.randomUUID)();
    }
    get product() {
        return this._product;
    }
    get content() {
        return this._content;
    }
    get from() {
        return this._from;
    }
    show() {
        console.log(`Comentário feito por ${this.from.username}: "${this.content}"`);
    }
    toJson() {
        return {
            id: this._id,
            from: this._from.toJson(),
            productId: this._product.id,
            content: this._content
        };
    }
}
exports.Comment = Comment;
