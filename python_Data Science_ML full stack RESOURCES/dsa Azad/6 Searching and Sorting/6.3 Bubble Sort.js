// Assuming n is provided by some input mechanism, e.g., a prompt
let n = parseInt(prompt('Enter the number of elements'), 10)
// Assuming arr is provided by some input mechanism, e.g., a prompt for each element
let arr = [] // Use prompt to fill in the array, for example purposes let's define one
// let arr = [102, 24, 2, 56, 40]; // Example array, replace with actual input
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(prompt('Enter array element ' + (i + 1)), 10)
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swapping elements
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

// The output is commented out as per instructions
// for (let ele of arr) {
//     console.log(ele + ' ');
// }
