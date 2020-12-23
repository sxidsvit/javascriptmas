function insertDashes(arr) {
  return arr.split(' ').map(elem => elem.split('').join('-')).join(' ')
}

const arr = "aba caba"
insertDashes(arr)
console.log(insertDashes(arr));