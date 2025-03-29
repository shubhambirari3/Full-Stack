function rotate(arr, d = 1) {
  if (arr.length === 0) {
    return 1
  }
  d = -d % arr.length
  return arr.slice(d).concat(arr.slice(0, d))
}

function findMinimumRotationToMatchOriginal(arr) {
  let temp = arr.slice() // Create a copy of the array
  for (let d = 0; d < arr.length; d++) {
    temp.sort(function (a, b) {
      return a - b
    }) // Sort the array
    let rotated = rotate(temp, d) // Rotate the sorted array

    let flag = true
    for (let i = 0; i < rotated.length; i++) {
      if (rotated[i] !== arr[i]) {
        flag = false
        break
      }
    }

    if (flag) {
      console.log(d)
      break
    }
  }
}

// Main
let n = parseInt(prompt('Enter the number of elements'), 10)
let arr = prompt('Enter the elements separated by spaces')
  .split(' ')
  .map(function (item) {
    return parseInt(item, 10)
  })

findMinimumRotationToMatchOriginal(arr)
