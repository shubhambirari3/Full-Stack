// Binary Pattern

/*
Print the following pattern for the given number of rows.
Pattern for N = 4
    1111
    000
    11
    0
Input format : N (Total no. of rows)
Output format : Pattern in N lines
*/

// Sample Input:
// 5
// Sample Output:
// 11111
// 0000
// 111
// 00
// 1

function printBinaryPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = ''
    for (let j = n - i + 1; j > 0; j--) {
      line += i % 2 === 0 ? '0' : '1'
    }
    console.log(line)
  }
}

// Print Number Pyramid

/*
Print the following pattern for a given n.
For eg. N = 6

123456
 23456
  3456
   456
    56
     6
    56
   456
  3456
 23456
123456
*/

// Sample Input 1:
// 4
// Sample Output 1:
// 1234
//  234
//   34
//    4
//   34
//  234
// 1234

function printNumberPyramid(n) {
  for (let i = 1; i < 2 * n; i++) {
    let line = ''
    for (let j = 1; j <= n; j++) {
      if (i > j && i + j < 2 * n) {
        line += ' '
      } else {
        line += j
      }
    }
    console.log(line)
  }
}

// Rectangular numbers

/*
Print the following pattern for the given number of rows.
Pattern for N = 4

    4444444
    4333334
    4322234
    4321234
    4322234
    4333334  
    4444444
    
Input format : N (Total no. of rows)
Output format : Pattern in N lines
*/

// Sample Input:
// 3
// Sample Output:
// 33333
// 32223
// 32123
// 32223
// 33333

function printRectangularNumbers(n) {
  for (let i = 1 - n; i < n; i++) {
    let line = ''
    for (let j = 1 - n; j < n; j++) {
      let maxVal = Math.max(Math.abs(i), Math.abs(j)) + 1
      line += maxVal
    }
    console.log(line)
  }
}

// Print the pattern

/*
Print the following pattern for the given number of rows.

Pattern for N = 5

 1    2   3    4   5
 11   12  13   14  15
 21   22  23   24  25
 16   17  18   19  20
 6    7    8   9   10
 
Input format : N (Total no. of rows)
Output format : Pattern in N lines
*/

// Sample Input:
// 4
// Sample Output:
//  1  2  3  4
//  9 10 11 12
// 13 14 15 16
//  5  6  7  8

function printThePattern(n) {
  let z = 1
  for (let i = 1; i <= n; i++) {
    let toprint = (z - 1) * n + 1
    let line = ''
    for (let j = toprint; j < toprint + n; j++) {
      line += j + ' '
    }
    if (i < Math.ceil(n / 2)) {
      z += 2
    } else if (i === Math.ceil(n / 2)) {
      z += n % 2 === 0 ? 1 : -1
    } else {
      z -= 2
    }
    console.log(line)
  }
}










