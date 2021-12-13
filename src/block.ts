export interface IBlock {
  timestamp: number
  lastHash: string
  data: string
  hash: string
  nonce: number
  difficulty: number
}

export class Block implements IBlock {
  timestamp: number
  lastHash: string
  data: string
  hash: string
  nonce: number
  difficulty: number

  constructor(block: IBlock) {
    this.timestamp = block.timestamp
    this.lastHash = block.lastHash
    this.data = block.data
    this.hash = block.hash
    this.nonce = block.nonce
    this.difficulty = block.difficulty
  }
}

export const INITIAL_DIFFICULTY = 3

export const GENESIS_DATA: IBlock = {
  timestamp: new Date(2000, 1, 1).valueOf(),
  lastHash: 'last-hash',
  data: 'genesis data',
  hash: 'first-hash',
  nonce: 0,
  difficulty: INITIAL_DIFFICULTY,
}

export const GENESIS_BLOCK = new Block(GENESIS_DATA)
