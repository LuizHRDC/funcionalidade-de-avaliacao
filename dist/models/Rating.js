"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const crypto_1 = require("crypto");
class Rating {
    constructor(_rate, _user) {
        this._rate = _rate;
        this._user = _user;
        this._id = (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get rate() {
        return this._rate;
    }
    get user() {
        return this._user;
    }
}
exports.Rating = Rating;
