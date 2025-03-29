function findSecondMaximum(arr) {
  arr.sort(function (a, b) {
    return a - b
  }) // Sort the array in ascending order
  let count = 0
  let max1 = 0
  let max2 = 0

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++
    } else if (arr[i] > max1) {
      max2 = max1
      max1 = arr[i]
    }
  }

  if (count === arr.length - 1 || arr.length <= 1) {
    console.log(-2147483648)
  } else {
    console.log(max1)
  }
}

// Main
let n = parseInt(prompt('Enter the number of elements'), 10)
let arr = []
for (let i = 0; i < n; i++) {
  arr.push(parseInt(prompt('Enter array element ' + (i + 1)), 10))
}

findSecondMaximum(arr)
