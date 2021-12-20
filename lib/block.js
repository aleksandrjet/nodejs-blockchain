"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENESIS_BLOCK = exports.GENESIS_DATA = exports.INITIAL_DIFFICULTY = exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(block) {
        this.timestamp = block.timestamp;
        this.lastHash = block.lastHash;
        this.data = block.data;
        this.hash = block.hash;
        this.nonce = block.nonce;
        this.difficulty = block.difficulty;
    }
    return Block;
}());
exports.Block = Block;
exports.INITIAL_DIFFICULTY = 3;
exports.GENESIS_DATA = {
    timestamp: new Date(2000, 1, 1).valueOf(),
    lastHash: 'last-hash',
    data: 'genesis data',
    hash: 'first-hash',
    nonce: 0,
    difficulty: exports.INITIAL_DIFFICULTY,
};
exports.GENESIS_BLOCK = new Block(exports.GENESIS_DATA);
