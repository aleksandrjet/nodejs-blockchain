import express from 'express'
import { Blockchain } from './blockchain'

// import { averageWork } from './averageWork'
// console.log('Start!')
// averageWork()

const app = express()
const blockchain = new Blockchain()

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain)
})

app.listen(7010, () => {
  console.log('listening localhost:7010')
})