////////////////////////
function binary(arr, low, high, key) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (key === arr[mid]) {
      return mid
    } else if (arr[mid] > key) {
      return binary(arr, low, mid - 1, key)
    } else {
      return binary(arr, mid + 1, high, key)
    }
  } else {
    return -1
  }
}

// Example usage:
// let arr = [1, 3, 5, 7, 9, 11]; // Example array, replace with actual input
// let key = 5; // Example key, replace with actual input
// let ele = binary(arr, 0, arr.length - 1, key);
// console.log(ele); // Output will be the index of the found element or -1

////////////////////////
function binary_search(arr, element) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === element) {
      return mid
    } else if (arr[mid] < element) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

// Example usage:
// let arr = [1, 32, 48, 56, 84, 136]; // Example array, replace with actual input
// let key = 56; // Example key, replace with actual input
// let index = binary_search(arr, key);
// console.log(index); // Output will be the index of the found element or -1
