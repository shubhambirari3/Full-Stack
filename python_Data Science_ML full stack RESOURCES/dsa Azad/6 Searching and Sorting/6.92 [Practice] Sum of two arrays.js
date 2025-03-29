function sumOfArrays(ar1, ar2, n, m) {
  let bFlag = false // This flag indicates if there is a carry
  let res = [] // This will hold the result

  // Padding smaller array with zeros at the beginning
  if (n > m) {
    let app = n - m
    for (let i = 0; i < app; i++) {
      ar2.unshift(0)
    }
  } else {
    let app = m - n
    for (let i = 0; i < app; i++) {
      ar1.unshift(0)
    }
  }

  let size = ar1.length

  // Adding elements of arrays from the last index
  for (let i = size - 1; i >= 0; i--) {
    let sum = ar1[i] + ar2[i]

    if (bFlag) {
      sum += 1
    }

    if (sum >= 10) {
      bFlag = true
      let cur_ele = sum % 10
      res.unshift(cur_ele) // Prepend current element
    } else {
      res.unshift(sum)
      bFlag = false
    }
  }

  // If there is a carry after the last addition
  if (bFlag) {
    res.unshift(1)
  }

  // Making sure the result has correct size
  if (res.length !== size + 1) {
    res.unshift(0)
  }

  // Output the result (commented as per instructions)
  // res.forEach(function(ele) {
  //     console.log(ele + ' ');
  // });
}

// Main
let n = parseInt(prompt('Enter the number of elements for the first array'), 10)
let ar1 = prompt('Enter the elements for the first array separated by spaces')
  .split(' ')
  .map(Number)

let m = parseInt(
  prompt('Enter the number of elements for the second array'),
  10
)
let ar2 = prompt('Enter the elements for the second array separated by spaces')
  .split(' ')
  .map(Number)

sumOfArrays(ar1, ar2, n, m)
