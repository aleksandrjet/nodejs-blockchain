import { IBlock } from '../block'

export const MINE_RATE = 1000

interface IParams {
  originalBlock: IBlock
  timestamp: number
}

interface IResult {
  difficulty: number
  timeDifference: number
}

export const adjustDifficulty = (params: IParams): IResult => {
  const { originalBlock, timestamp } = params
  const { difficulty } = originalBlock

  const timeDifference = timestamp - originalBlock.timestamp

  if (difficulty < 1) {
    return { difficulty: 1, timeDifference }
  }

  if (timeDifference > MINE_RATE) {
    return { difficulty: difficulty -1, timeDifference }
  }

  return { difficulty: difficulty +1, timeDifference }
}
