function arrayPreviousLess(nums) {

  let previes = 0
  const newNums = []

  nums.map((current) => {
    if (previes === 0 || previes > current) {
      newNums.push(-1)
      return previes = current
    } else {
      newNums.push(previes)
      return previes = current
    }
  })

  return newNums
}

const nums = [3, 5, 2, 4, 5];

const res = arrayPreviousLess(nums)
console.log('arrayPreviousLess(nums): ', res);