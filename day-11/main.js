// function avoidObstacles(nums) {

//   nums.sort((a, b) => (a - b))
//   console.log('nums: ', nums);

//   const stepMin = Math.min(...nums) + 1
//   const stepMax = Math.max(...nums) + 1

//   let res = []
//   let currentStep = 0

//   for (let i = stepMin; i <= stepMax; i++) {
//     if (!nums.includes(i)) {
//       res.push(i)
//       if (!currentStep) {
//         currentStep = i
//         i = i + currentStep - 1
//       } else {
//         i = i + currentStep - 1
//       }
//     }
//   }

//   while (res.length >= 2) {
//     console.log('res: ', res);
//     res[1] % res[0] ? res.splice(0, 1) : res.splice(1, 1)
//   }

//   return Math.min(...res)

// }

function avoidObstacles(nums) {
  nums = nums.sort();
  let minLength = 1;
  while (!nums.every(num => num % minLength !== 0)) {
    minLength++;
  }
  return minLength;
}



const nums = 5, 3, 6, 8, 9, 11, 17[]

avoidObstacles(nums)

console.log('step: ', avoidObstacles(nums));
