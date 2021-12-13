import hexToBinary from 'hex-to-binary'

import { adjustDifficulty } from './adjustDifficulty'
import { cryptoHash } from './cryptoHash'
import { Block, IBlock } from '../block'

export const mineBlock = ({
  lastBlock,
  data,
}: {
  lastBlock: IBlock
  data: IBlock['data']
}) => {
  const { hash: lastHash } = lastBlock

  let nonce = 0
  let hash: string
  let timestamp: number
  let difficulty
  let timeToMineBlock

  do {
    nonce++
    timestamp = new Date().valueOf()

    const { difficulty: currDifficulty, timeDifference } = adjustDifficulty({
      originalBlock: lastBlock,
      timestamp,
    })

    difficulty = currDifficulty
    timeToMineBlock = timeDifference

    hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty)
  } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty))

  // console.group('Mine block')
  // console.log(`time: ${timeToMineBlock}ms`)
  // console.log(`nonce: ${nonce}`)
  // console.log(`difficulty: ${difficulty}`)
  // console.groupEnd()

  return new Block({
    timestamp,
    lastHash,
    data,
    difficulty,
    nonce,
    hash,
  })
}
