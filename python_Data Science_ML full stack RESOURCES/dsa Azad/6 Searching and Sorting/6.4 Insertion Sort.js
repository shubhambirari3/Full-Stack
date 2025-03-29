function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = temp
  }

  // The output is commented out as per instructions
  // arr.forEach(function(ele) {
  //     console.log(ele + ' ');
  // });
}

// Assuming n is provided by some input mechanism, e.g., a prompt
let n = parseInt(prompt('Enter the number of elements'), 10)
// Assuming arr is provided by some input mechanism, e.g., a prompt for each element
let arr = [] // Use prompt to fill in the array, for example purposes let's define one
for (let i = 0; i < n; i++) {
  arr.push(parseInt(prompt('Enter array element ' + (i + 1)), 10))
}

insertionSort(arr)
