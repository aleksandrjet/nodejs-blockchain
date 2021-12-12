import isEqual from 'lodash/isEqual'

import { cryptoHash } from './cryptoHash'
import { GENESIS_BLOCK } from '../block'
import { IBlockchain } from '../blockchain'

export const isValidChain = (chain: IBlockchain['chain']): boolean => {
  if (!isEqual(chain[0], GENESIS_BLOCK)) {
    return false
  }

  for (let i = 0; i < chain.length; i++) {
    const block = chain[i]
    const actualLashHash = chain[i - 1].hash
    const lastDifficulty = chain[i - 1].difficulty

    const { timestamp, hash, lastHash, data, difficulty, nonce } = block

    if (lastHash !== actualLashHash) {
      return false
    }

    if (Math.abs(lastDifficulty - difficulty) > 1) {
      return false
    }

    const validatedHash = cryptoHash(
      timestamp,
      lastHash,
      data,
      difficulty,
      nonce,
    )

    if (validatedHash !== hash) {
      return false
    }
  }

  return true
}
