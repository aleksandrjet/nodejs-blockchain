"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mineBlock = void 0;
var hex_to_binary_1 = __importDefault(require("hex-to-binary"));
var adjustDifficulty_1 = require("./adjustDifficulty");
var cryptoHash_1 = require("./cryptoHash");
var block_1 = require("../block");
var mineBlock = function (_a) {
    var lastBlock = _a.lastBlock, data = _a.data;
    var lastHash = lastBlock.hash;
    var nonce = 0;
    var hash;
    var timestamp;
    var difficulty;
    var timeToMineBlock;
    do {
        nonce++;
        timestamp = new Date().valueOf();
        var _b = (0, adjustDifficulty_1.adjustDifficulty)({
            originalBlock: lastBlock,
            timestamp: timestamp,
        }), currDifficulty = _b.difficulty, timeDifference = _b.timeDifference;
        difficulty = currDifficulty;
        timeToMineBlock = timeDifference;
        hash = (0, cryptoHash_1.cryptoHash)(timestamp, lastHash, data, nonce, difficulty);
    } while ((0, hex_to_binary_1.default)(hash).substring(0, difficulty) !== '0'.repeat(difficulty));
    // console.group('Mine block')
    // console.log(`time: ${timeToMineBlock}ms`)
    // console.log(`nonce: ${nonce}`)
    // console.log(`difficulty: ${difficulty}`)
    // console.groupEnd()
    return new block_1.Block({
        timestamp: timestamp,
        lastHash: lastHash,
        data: data,
        difficulty: difficulty,
        nonce: nonce,
        hash: hash,
    });
};
exports.mineBlock = mineBlock;
