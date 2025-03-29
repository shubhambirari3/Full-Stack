function rotate(arr, d = 1) {
  if (arr.length === 0) {
    return
  }
  d = d % arr.length
  return arr.slice(d).concat(arr.slice(0, d))
}

// Main
let n = parseInt(prompt('Enter the number of elements'), 10)
let arr = prompt('Enter the elements separated by spaces')
  .split(' ')
  .map(function (item) {
    return parseInt(item, 10)
  })
let d = parseInt(prompt('Enter the number of positions to rotate left'), 10)
let rotatedArray = rotate(arr, d)

// The output is commented out as per instructions
// console.log(rotatedArray.join(' ')); // This would print the rotated array
