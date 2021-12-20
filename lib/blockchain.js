"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
var mineBlock_1 = require("./utils/mineBlock");
var isValidChain_1 = require("./utils/isValidChain");
var block_1 = require("./block");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        var _this = this;
        this.addBlock = function (data) {
            var newBlock = (0, mineBlock_1.mineBlock)({
                lastBlock: _this.chain[_this.chain.length - 1],
                data: data,
            });
            _this.chain.push(newBlock);
        };
        this.replaceChain = function (chain) {
            if (chain.length <= _this.chain.length) {
                console.error('The incoming chain must be longer');
                return;
            }
            if ((0, isValidChain_1.isValidChain)(chain)) {
                console.error('The incoming chain must be valid');
                return;
            }
            _this.chain = chain;
        };
        this.chain = [block_1.GENESIS_BLOCK];
    }
    return Blockchain;
}());
exports.Blockchain = Blockchain;
