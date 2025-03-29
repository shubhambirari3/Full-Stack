// #Row Wise Sum
// """
// For a given two-dimensional integer array/list of size (N x M),
// find and print the sum of each of the row elements in a single line, separated by a single space.

// Input Format :
// The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
// Then the test cases follow.

// First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

// Second line onwards, the next 'N' lines or rows represent the ith row values.

// Each of the ith row constitutes 'M' column values separated by a single space.

// Output Format :
// For each test case, print the sum of every ith row elements in a single line separated by a single space.
// Output for every test case will be printed in a seperate line.
// """
// Sample Input 1:
// 1
// 4 2
// 1 2
// 3 4
// 5 6
// 7 8
// Sample Output 1:
// 3 7 11 15

// Sample Input 2:
// 2
// 2 5
// 4 5 3 2 6
// 7 5 3 8 9
// 4 4
// 1 2 3 4
// 9 8 7 6
// 3 4 5 6
// -1 1 -10 5
// Sample Output 2:
// 20 32
// 10 30 18 -5

// Solution :

function sumOfElementsInEachRow(n, m, b) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = []
    for (let j = 0; j < m; j++) {
      arr[i][j] = parseInt(b[m * i + j])
    }
  }

  let newArr = arr.map((row) => row.reduce((sum, ele) => sum + ele, 0))

  console.log(newArr.join(' '))
}

let inputStr = prompt('Enter the dimensions (n m):').split(' ')
let n = parseInt(inputStr[0]),
  m = parseInt(inputStr[1])
let b = prompt('Enter the matrix elements:').split(' ')
sumOfElementsInEachRow(n, m, b)

// #Largest Row or Column
// """
// For a given two-dimensional integer array/list of size (N x M),
// you need to find out which row or column has the largest sum(sum of all the elements in a row/column) amongst all the rows and columns.

// Note :
// If there are more than one rows/columns with maximum sum, consider the row/column that comes first.
// And if ith row and jth column has the same largest sum, consider the ith row as answer

// Input Format :
// The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
// Then the test cases follow.

// First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

// Second line onwards, the next 'N' lines or rows represent the ith row values.

// Each of the ith row constitutes 'M' column values separated by a single space.

// Output Format :
// For each test case, If row sum is maximum, then print: "row" <row_index> <row_sum>
// OR
// If column sum is maximum, then print: "column" <col_index> <col_sum>
// It will be printed in a single line separated by a single space between each piece of information.
// Output for every test case will be printed in a seperate line.
// """
// Sample Input 1 :
// 1
// 2 2
// 1 1
// 1 1
// Sample Output 1 :
// row 0 2

// Sample Input 2 :
// 2
// 3 3
// 3 6 9
// 1 4 7
// 2 8 9
// 4 2
// 1 2
// 90 100
// 3 40
// -10 200
// Sample Output 2 :
// column 2 25
// column 1 342

// Solution :

function largestRowCol(arr) {
  let rows = arr.length
  let cols = arr[0].length
  let sumRow = new Array(rows).fill(0)
  let sumCol = new Array(cols).fill(0)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      sumRow[i] += arr[i][j]
      sumCol[j] += arr[i][j]
    }
  }

  let l = ['row', 0, sumRow[0]]
  for (let i = 1; i < rows; i++) {
    if (sumRow[i] > l[2]) {
      l = ['row', i, sumRow[i]]
    }
  }
  for (let j = 0; j < cols; j++) {
    if (sumCol[j] > l[2]) {
      l = ['column', j, sumCol[j]]
    }
  }
  return l
}

let size = prompt('Enter the dimensions (m n):').split(' ').map(Number)
let m = size[0],
  n = size[1]
let elements = prompt('Enter the matrix elements:').split(' ').map(Number)
let arr = []
for (let j = 0; j < m; j++) {
  arr[j] = []
  for (let i = 0; i < n; i++) {
    arr[j][i] = elements[j * n + i]
  }
}
let result = largestRowCol(arr)
console.log(result.join(' '))

// #Wave Print
// """
// For a given two-dimensional integer array/list of size (N x M),
// print the array/list in a sine wave order, i.e, print the first column top to bottom, next column bottom to top and so on.

// Input format :
// The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
// Then the test cases follow.

// First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

// Second line onwards, the next 'N' lines or rows represent the ith row values.

// Each of the ith row constitutes 'M' column values separated by a single space.

// Output format :
// For each test case, print the elements of the two-dimensional array/list in the sine wave order in a single line, separated by a single space.
// Output for every test case will be printed in a seperate line.
// """
// Sample Input 1:
// 1
// 3 4
// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
// Sample Output 1:
// 1 5 9 10 6 2 3 7 11 12 8 4

// Sample Input 2:
// 2
// 5 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// 13 14 15
// 3 3
// 10 20 30
// 40 50 60
// 70 80 90
// Sample Output 2:
// 1 4 7 10 13 14 11 8 5 2 3 6 9 12 15
// 10 40 70 80 50 20 30 60 90

// Solution :

function wavePrint(twoDArr, row, col) {
  let result = []
  for (let j = 0; j < col; j++) {
    if (j % 2 === 0) {
      for (let i = 0; i < row; i++) {
        result.push(twoDArr[i][j])
      }
    } else {
      for (let i = row - 1; i >= 0; i--) {
        result.push(twoDArr[i][j])
      }
    }
  }
  console.log(result.join(' '))
}

let dimensions = prompt('Enter the dimensions (row col):')
  .split(' ')
  .map(Number)
let row = dimensions[0],
  col = dimensions[1]
let elements = prompt('Enter the matrix elements:').split(' ').map(Number)
let arr = []
for (let j = 0; j < row; j++) {
  arr[j] = []
  for (let i = 0; i < col; i++) {
    arr[j][i] = elements[j * col + i + 2]
  }
}
wavePrint(arr, row, col)

// #Spiral Print
// """
// For a given two-dimensional integer array/list of size (N x M), print it in a spiral form.
// That is, you need to print in the order followed for every iteration:
// a. First row(left to right)
// b. Last column(top to bottom)
// c. Last row(right to left)
// d. First column(bottom to top)
// Mind that every element will be printed only once.

// Input format :
// The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
// Then the test cases follow.

// First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

// Second line onwards, the next 'N' lines or rows represent the ith row values.

// Each of the ith row constitutes 'M' column values separated by a single space.

// Output format :
// For each test case, print the elements of the two-dimensional array/list in the spiral form in a single line, separated by a single space.
// Output for every test case will be printed in a seperate line.
// """
// Sample Input 1:
// 1
// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// Sample Output 1:
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

// Sample Input 2:
// 2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 3 1
// 10
// 20
// 30
// Sample Output 2:
// 1 2 3 6 9 8 7 4 5
// 10 20 30

// Solution :

function spiralPrint(twoDArr, row, col) {
  let top = 0,
    bottom = row - 1,
    left = 0,
    right = col - 1
  let direction = 0
  let result = []

  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) result.push(twoDArr[top][i])
      top++
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) result.push(twoDArr[i][right])
      right--
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) result.push(twoDArr[bottom][i])
      bottom--
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) result.push(twoDArr[i][left])
      left++
    }
    direction = (direction + 1) % 4
  }

  console.log(result.join(' '))
}

let size = prompt('Enter the dimensions (row col):').split(' ').map(Number)
let row = size[0],
  col = size[1]
let elements = prompt('Enter the matrix elements:').split(' ').map(Number)
let arr = []
for (let j = 0; j < row; j++) {
  arr[j] = []
  for (let i = 0; i < col; i++) {
    arr[j][i] = elements[j * col + i + 2]
  }
}
spiralPrint(arr, row, col)
