function sumOddFibonacciNumbers(num) {
  let prev = 1, current = 1, sum = 2

  while (sum < num) {
    let newCurrent = prev + current
    [prev, current] =[current, newCurrent]
    // current = newCurrent
    if (current % 2 && current <= num) { sum = sum + current }
    if (current > num) { return sum }
  }

  return sum

}
let rez = sumOddFibonacciNumbers(4000000)
console.log('rez: ', rez);



// describe('sumOddFibonacciNumbers()', () => {
//   it('returns sum of all odd Fibonnci numbers', () => {
//     // arrange
//     const num = 10;

//     // act
//     const result = sumOddFibonacciNumbers(num);

//     // log
//     console.log("result 1: ", result);

//     // assert
//     expect(result).toBe(10);
//   });

//   it('returns sum of all odd Fibonnci numbers 2nd example', () => {
//     // arrange
//     const num = 1000;

//     // act
//     const result = sumOddFibonacciNumbers(num);

//     // log
//     console.log("result 2: ", result);

//     // assert
//     expect(result).toBe(1785);
//   });
// });
