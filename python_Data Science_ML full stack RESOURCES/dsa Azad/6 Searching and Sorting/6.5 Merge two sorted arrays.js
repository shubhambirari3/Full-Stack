function mergeArrays(arr1, arr2) {
  let arr3 = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i])
      i++
    } else {
      arr3.push(arr2[j])
      j++
    }
  }

  // Add remaining elements of arr1, if any
  while (i < arr1.length) {
    arr3.push(arr1[i])
    i++
  }

  // Add remaining elements of arr2, if any
  while (j < arr2.length) {
    arr3.push(arr2[j])
    j++
  }

  // The output is commented out as per instructions
  // arr3.forEach(function(ele) {
  //     console.log(ele + ' ');
  // });
}

// Assuming m and n are provided by some input mechanism, e.g., a prompt
let m = parseInt(prompt('Enter the number of elements for the first array'), 10)
let arr1 = []
for (let i = 0; i < m; i++) {
  arr1.push(
    parseInt(
      prompt('Enter array element ' + (i + 1) + ' for the first array'),
      10
    )
  )
}

let n = parseInt(
  prompt('Enter the number of elements for the second array'),
  10
)
let arr2 = []
for (let i = 0; i < n; i++) {
  arr2.push(
    parseInt(
      prompt('Enter array element ' + (i + 1) + ' for the second array'),
      10
    )
  )
}

mergeArrays(arr1, arr2)
