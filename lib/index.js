"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var blockchain_1 = require("./blockchain");
var blockchain = new blockchain_1.Blockchain();
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/api/blocks', function (req, res) {
    res.json(blockchain.chain);
});
app.get('/api/mine-block', function (req, res) {
    blockchain.addBlock(String(Math.ceil(Math.random() * 10000)));
    res.json(blockchain.chain);
});
app.post('/api/mine', function (req, res) {
    var data = req.body.data;
    blockchain.addBlock(data);
    res.redirect('/api/blocks');
});
app.listen(7010, function () {
    console.log('listening localhost:7010');
});
