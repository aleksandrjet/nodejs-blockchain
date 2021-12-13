import { mineBlock } from './utils/mineBlock'
import { isValidChain } from './utils/isValidChain'
import { GENESIS_BLOCK, IBlock } from './block'

export interface IBlockchain {
  chain: IBlock[]
  addBlock: (data: IBlock['data']) => void
}

export class Blockchain implements IBlockchain {
  chain: IBlock[]

  constructor() {
    this.chain = [GENESIS_BLOCK]
  }

  addBlock = (data: IBlock['data']): void => {
    const newBlock = mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    })

    this.chain.push(newBlock)
  }

  replaceChain = (chain: IBlockchain['chain']): void => {
    if (chain.length <= this.chain.length) {
      console.error('The incoming chain must be longer')
      return
    }

    if (isValidChain(chain)) {
      console.error('The incoming chain must be valid')
      return
    }

    this.chain = chain
  }
}
