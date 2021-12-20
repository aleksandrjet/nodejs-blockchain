"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var blockchain_1 = require("./blockchain");
// import { averageWork } from './averageWork'
// console.log('Start!')
// averageWork()
var app = express_1.default();
var blockchain = new blockchain_1.Blockchain();
app.get('/api/blocks', function (req, res) {
    res.json(blockchain.chain);
});
app.listen(7010, function () {
    console.log('listening localhost:7010');
});
