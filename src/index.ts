import bodyParser from 'body-parser'
import express from 'express'
import { Blockchain } from './blockchain'

const blockchain = new Blockchain()

const app = express()
app.use(bodyParser.json())

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain)
})

app.get('/api/mine-block', (req, res) => {
  blockchain.addBlock(String(Math.ceil(Math.random() * 10000)))
  res.json(blockchain.chain)
})

app.post('/api/mine', (req, res) => {
  const {data} = req.body

  blockchain.addBlock(data)
  res.redirect('/api/blocks')
})



app.listen(7010, () => {
  console.log('listening localhost:7010')
})