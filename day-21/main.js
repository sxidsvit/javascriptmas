function sumOfTwo(nums1, nums2, value) {
  return nums1.map(n => nums2.map(m => n + m)).flat().includes(value)
}

const nums1 = [1, 2, 3]
const nums2 = [10, 20, 30, 40]
const value = 42
const result = sumOfTwo(nums1, nums2, value)
console.log('result: ', result);