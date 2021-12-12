import { Blockchain } from './blockchain'
import { IBlock } from './block'

export const averageWork = () => {
  const blockchain = new Blockchain()
  blockchain.addBlock('initial')

  let prevTimestamp: number
  let nextTimestamp: number
  let nextBlock: IBlock
  let timeDiff
  let average

  const times: number[] = []

  console.log('Start average work')

  for (let i = 0; i < 100; i++) {
    const prevBlock = blockchain.chain[blockchain.chain.length - 1]
    prevTimestamp = prevBlock.timestamp

    blockchain.addBlock(`block_${i}`)

    nextBlock = blockchain.chain[blockchain.chain.length - 1]
    nextTimestamp = nextBlock.timestamp

    timeDiff = nextTimestamp - prevTimestamp

    times.push(timeDiff)

    const totalTime = times.reduce((acc, curr) => {
      return acc + curr
    })

    average = totalTime / times.length

    console.log(
      `Block ${blockchain.chain.length}. Difficulty: ${
        nextBlock.difficulty
      } for ${nextBlock.nonce} attempts by ${Math.ceil(
        timeDiff,
      )}ms, average time ${Math.ceil(average)}ms`,
    )

    // console.group(`Start average work`)
    // console.log(`Block ${blockchain.chain.length + 1}`)
    // console.log(`Time to mine block ${timeDiff}ms`)
    // console.log(`Difficulty ${nextBlock.difficulty} for ${nextBlock.nonce}`)
    // console.log(`Average time ${average}ms`)
    // console.groupEnd()
  }
}
