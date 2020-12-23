function arrayMaximalAdjacentDifference(nums) {

  const absArr = []

  for (let i = 0; i < nums.length - 1; i++) {
    let rez = Math.abs(nums[i] - nums[i + 1])
    absArr.push(rez)
  }
  return Math.max(...absArr)
}


const nums = [2, 4, 1, 0];

const result = arrayMaximalAdjacentDifference(nums)
console.log('result: ', result);