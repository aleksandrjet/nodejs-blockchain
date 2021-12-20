"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoHash = void 0;
var createHash = require('crypto').createHash;
var cryptoHash = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var hash = createHash('sha256');
    var sortedString = args
        .sort()
        .map(function (elem) { return String(elem); })
        .join(' ');
    hash.update(sortedString);
    return hash.digest('hex');
};
exports.cryptoHash = cryptoHash;
