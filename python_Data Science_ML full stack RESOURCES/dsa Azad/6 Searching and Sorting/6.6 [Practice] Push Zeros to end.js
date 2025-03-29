function moveZerosToEnd(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] === 0) {
        // Swapping elements
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  // The output is commented out as per instructions
  // arr.forEach(function(ele) {
  //     console.log(ele + ' ');
  // });
}

let arr = [65, 0, 25, 0, 36] // Example array, replace with actual input
moveZerosToEnd(arr)

/////////////////////////////////////

function moveZerosToEndCountMethod(arr) {
  let zeroCount = 0
  let output = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++
    } else {
      output.push(arr[i])
    }
  }

  while (zeroCount > 0) {
    output.push(0)
    zeroCount--
  }

  // The output is commented out as per instructions
  // output.forEach(function(ele) {
  //     console.log(ele + ' ');
  // });
}

moveZerosToEndCountMethod(arr)
