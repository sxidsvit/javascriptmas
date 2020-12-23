//  Initial data

const str = 'cabca';

// First - Set
function differentSymbolsNaive(str) {
  return new Set(str).size
}

differentSymbolsNaive(str)

//  Second - For loop & Array
function differentSymbolsNaive2(str) {
  const data = str.split('')
  const accumulate = []

  for (let n = 0; n < data.length; n++) {
    !accumulate.includes(data[n]) && accumulate.push(data[n])
  }
  return accumulate.length
}

differentSymbolsNaive2(str)

//  Third - While loop & Array
function differentSymbolsNaive3(str) {
  const data = str.split('')
  const accumulate = []

  let n = 0
  while (n < data.length) {
    !accumulate.includes(data[n]) && accumulate.push(data[n])
    n++
  }
  return accumulate.length
}

differentSymbolsNaive3(str)
