function adjacentElementsProduct(nums) {
  const arrayLength = nums.length

  const multiplideArray = nums
    .map((_, idx, arr) => {
      const elem = idx < (arrayLength - 1) ? arr[idx] * arr[idx + 1] : 0
      return elem
    })
  console.log(multiplideArray)

  return Math.max(...multiplideArray)
}

const rezult = adjacentElementsProduct([3, 6, -2, -5, 7, 3])
console.log('rezult: ', rezult);
