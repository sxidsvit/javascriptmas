function extractMatrixColumn(matrix, column) {
  return matrix.map(row => row[column])
}

const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;
const result = extractMatrixColumn(matrix, column)
console.log('result: ', result);
