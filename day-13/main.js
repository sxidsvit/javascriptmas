function extractEachKth(num, index) {
  const result = num.filter((_, idx) => (idx + 1) % index !== 0)
  return result
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = 3;

const result = extractEachKth(nums, index)
console.log('result: ', result);