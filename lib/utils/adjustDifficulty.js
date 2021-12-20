"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustDifficulty = exports.MINE_RATE = void 0;
exports.MINE_RATE = 1000;
var adjustDifficulty = function (params) {
    var originalBlock = params.originalBlock, timestamp = params.timestamp;
    var difficulty = originalBlock.difficulty;
    var timeDifference = timestamp - originalBlock.timestamp;
    if (difficulty < 1) {
        return { difficulty: 1, timeDifference: timeDifference };
    }
    if (timeDifference > exports.MINE_RATE) {
        return { difficulty: difficulty - 1, timeDifference: timeDifference };
    }
    return { difficulty: difficulty + 1, timeDifference: timeDifference };
};
exports.adjustDifficulty = adjustDifficulty;
