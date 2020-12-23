// function validTime(str) {
//   const result = str.split(':').map(elem => parseInt(elem))
//   if (result[0] < 0 || result[0] > 24) return false
//   if (result[1] < 0 || result[1] > 60) return false
//   return true
// }

function validTime(str) {
  //  write code here.
  const arr = str.split(":")
  if (arr[0] <= 24 && arr[1] < 60) {
    return true
  }
  return false
}

const str = '-02:23'

const result = validTime(str)
console.log('result: ', result);
