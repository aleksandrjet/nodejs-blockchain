"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidChain = void 0;
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var cryptoHash_1 = require("./cryptoHash");
var block_1 = require("../block");
var isValidChain = function (chain) {
    if (!isEqual_1.default(chain[0], block_1.GENESIS_BLOCK)) {
        return false;
    }
    for (var i = 0; i < chain.length; i++) {
        var block = chain[i];
        var actualLashHash = chain[i - 1].hash;
        var lastDifficulty = chain[i - 1].difficulty;
        var timestamp = block.timestamp, hash = block.hash, lastHash = block.lastHash, data = block.data, difficulty = block.difficulty, nonce = block.nonce;
        if (lastHash !== actualLashHash) {
            return false;
        }
        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }
        var validatedHash = cryptoHash_1.cryptoHash(timestamp, lastHash, data, difficulty, nonce);
        if (validatedHash !== hash) {
            return false;
        }
    }
    return true;
};
exports.isValidChain = isValidChain;
