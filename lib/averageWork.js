"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageWork = void 0;
var blockchain_1 = require("./blockchain");
var averageWork = function () {
    var blockchain = new blockchain_1.Blockchain();
    blockchain.addBlock('initial');
    var prevTimestamp;
    var nextTimestamp;
    var nextBlock;
    var timeDiff;
    var average;
    var times = [];
    console.log('Start average work');
    for (var i = 0; i < 100; i++) {
        var prevBlock = blockchain.chain[blockchain.chain.length - 1];
        prevTimestamp = prevBlock.timestamp;
        blockchain.addBlock("block_" + i);
        nextBlock = blockchain.chain[blockchain.chain.length - 1];
        nextTimestamp = nextBlock.timestamp;
        timeDiff = nextTimestamp - prevTimestamp;
        times.push(timeDiff);
        var totalTime = times.reduce(function (acc, curr) {
            return acc + curr;
        });
        average = totalTime / times.length;
        console.log("Block " + blockchain.chain.length + ". Difficulty: " + nextBlock.difficulty + " for " + nextBlock.nonce + " attempts by " + Math.ceil(timeDiff) + "ms, average time " + Math.ceil(average) + "ms");
        // console.group(`Start average work`)
        // console.log(`Block ${blockchain.chain.length + 1}`)
        // console.log(`Time to mine block ${timeDiff}ms`)
        // console.log(`Difficulty ${nextBlock.difficulty} for ${nextBlock.nonce}`)
        // console.log(`Average time ${average}ms`)
        // console.groupEnd()
    }
};
exports.averageWork = averageWork;
(0, exports.averageWork)();
