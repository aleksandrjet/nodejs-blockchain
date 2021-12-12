const { createHash } = require('crypto')

export const cryptoHash = (...args: (string | number)[]): string => {
  const hash = createHash('sha256')

  const sortedString: string = args
    .sort()
    .map((elem) => String(elem))
    .join(' ')

  hash.update(sortedString)

  return hash.digest('hex')
}
