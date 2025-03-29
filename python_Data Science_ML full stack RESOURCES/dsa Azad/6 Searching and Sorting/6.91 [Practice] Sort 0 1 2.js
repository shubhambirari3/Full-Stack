function sort012(arr) {
  let count0 = 0,
    count1 = 0,
    count2 = 0

  // Count the number of 0s, 1s, and 2s
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 0:
        count0++
        break
      case 1:
        count1++
        break
      case 2:
        count2++
        break
    }
  }

  // Overwrite the original array based on the counts
  let index = 0
  while (count0 > 0) {
    arr[index++] = 0
    count0--
  }
  while (count1 > 0) {
    arr[index++] = 1
    count1--
  }
  while (count2 > 0) {
    arr[index++] = 2
    count2--
  }
}

// Main
let n = parseInt(prompt('Enter the number of elements'), 10)
let arr = prompt('Enter the elements separated by spaces')
  .split(' ')
  .map(function (item) {
    return parseInt(item, 10)
  })

sort012(arr)

// Print the sorted array
arr.forEach(function (ele) {
  console.log(ele + ' ')
})
