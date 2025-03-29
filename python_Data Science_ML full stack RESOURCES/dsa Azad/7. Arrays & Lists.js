// Array Sum

/*
Given an array of length N, you need to find and print the sum of all elements of the array.
*/

// Sample Input:
// 3
// 9 8 9
// Sample Output:
// 26

function arraySum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

// Swap Alternate

/*
You have been given an array/list(ARR) of size N.
You need to swap every pair of alternate elements in the array/list.
*/

// Sample Input:
// 6
// 9 3 6 12 4 32
// Sample Output:
// 3 9 12 6 32 4

function swapAlternate(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    // Swap elements at index i and i+1
    ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}

// Find Unique

/*
Given an integer array/list(ARR) of size N, where N is equal to [2M + 1].
Find and return the number which is unique in the array/list.
*/

// Sample Input:
// 7
// 2 3 1 6 3 6 2
// Sample Output:
// 1

function findUnique(arr) {
  let unique = 0
  for (let i = 0; i < arr.length; i++) {
    unique ^= arr[i]
  }
  return unique
}

// Find Duplicate

/*
Given an integer array/list(ARR) of size N which contains numbers from 0 to (N - 2).
Find and return the duplicate number present in the array.
*/

// Sample Input:
// 9
// 0 7 2 5 4 7 1 3 6
// Sample Output:
// 7

function findDuplicate(arr) {
  let seen = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i]
    }
    seen.add(arr[i])
  }
}

// Array Intersection

/*
Given two integer arrays/lists (ARR1 and ARR2) of size M and N, respectively.
Print their intersection.
*/

// Sample Input:
// 6
// 2 6 8 5 4 3
// 4
// 2 3 4 7
// Sample Output:
// 2 4 3

function arrayIntersection(arr1, arr2) {
  let set2 = new Set(arr2)
  for (let i = 0; i < arr1.length; i++) {
    if (set2.has(arr1[i])) {
      console.log(arr1[i])
      set2.delete(arr1[i]) // To ensure each element is printed only once
    }
  }
}

// Pair Sum

/*
Given an integer array/list(ARR) and a number X.
Find and return the total number of pairs in the array/list which sum to X.
*/

// Sample Input:
// 9
// 1 3 6 2 5 4 3 2 4
// 7
// Sample Output:
// 7

function pairSum(arr, X) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === X) {
        count++
      }
    }
  }
  return count
}

// Triplet Sum

/*
Given an integer array/list(ARR) and a number X.
Find and return the triplet(s) in the array/list which sum to X.
*/

// Sample Input:
// 7
// 1 2 3 4 5 6 7
// 12
// Sample Output:
// 5

function tripletSum(arr, X) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === X) {
          count++
        }
      }
    }
  }
  return count
}

// Sort 0 1

/*
You have been given an integer array/list(ARR) of size N that contains only integers, 0 and 1.
Write a function to sort this array/list.
*/

// Sample Input:
// 7
// 0 1 1 0 1 0 1
// Sample Output:
// 0 0 0 1 1 1 1

function sort01(arr) {
  let zeroCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    arr[i] = 0
  }
  for (let i = zeroCount; i < arr.length; i++) {
    arr[i] = 1
  }
}
