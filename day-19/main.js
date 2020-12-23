function alphabetSubsequence(str) {
  const charCodeArray = str.split('').map(char => char.charCodeAt(0))
  let idx = 0
  const charCodeArrayLength = charCodeArray.length
  while (idx < charCodeArrayLength - 2) {
    if (charCodeArray[idx] - charCodeArray[idx + 1] >= 0) {
      return false
    } else {
      idx++
    }
  }
  return true
}

const str = 'efgkl'

alphabetSubsequence(str)
