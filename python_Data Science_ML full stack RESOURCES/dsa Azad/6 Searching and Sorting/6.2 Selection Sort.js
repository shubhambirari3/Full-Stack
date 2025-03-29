function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i // Save the index of the minimum element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j // Update the index of minimum element if found
      }
    }
    if (minIndex !== i) {
      // Swap the elements if a new minimum is found
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  // The output is commented out as per instructions
  // for (let ele of arr) {
  //     console.log(ele + ' ');
  // }
}

// Example usage:
// let n = 5; // Example, replace with actual input
// let arr = [64, 25, 12, 22, 11]; // Example, replace with actual input
// selectionSort(arr);
