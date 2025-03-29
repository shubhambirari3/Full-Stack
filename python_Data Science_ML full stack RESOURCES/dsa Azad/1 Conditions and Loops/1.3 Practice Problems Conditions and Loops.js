// Assuming s, e, and w are provided by some input mechanism like prompt in browser environment
let s = parseInt(prompt('Enter start temperature:'))
let e = parseInt(prompt('Enter end temperature:'))
let w = parseInt(prompt('Enter step:'))

let F = s
while (F <= e) {
  let C = (F - 32) * (5 / 9)
  console.log(F + '\t' + Math.floor(C))
  F = F + w
}


// Assuming s, e, and w are provided by some input mechanism like prompt in browser environment
let s = parseInt(prompt("Enter start temperature:"));
let e = parseInt(prompt("Enter end temperature:"));
let w = parseInt(prompt("Enter step:"));

let F = s;
while (F <= e) {
  let C = (F - 32) * (5 / 9);
  console.log(F + "\t" + Math.floor(C));
  F = F + w;
}


while (true) {
  let n = parseInt(prompt('Enter the operation number:'))
  let a, b
  if (n === 1) {
    a = parseInt(prompt('Enter first number:'))
    b = parseInt(prompt('Enter second number:'))
    console.log(a + b)
  } else if (n === 2) {
    a = parseInt(prompt('Enter first number:'))
    b = parseInt(prompt('Enter second number:'))
    console.log(a - b)
  } else if (n === 3) {
    a = parseInt(prompt('Enter first number:'))
    b = parseInt(prompt('Enter second number:'))
    console.log(a * b)
  } else if (n === 4) {
    a = parseInt(prompt('Enter first number:'))
    b = parseInt(prompt('Enter second number:'))
    console.log(a / b)
  } else if (n === 5) {
    a = parseInt(prompt('Enter first number:'))
    b = parseInt(prompt('Enter second number:'))
    console.log(a % b)
  } else if (n === 6) {
    break // Exit the loop, there's no direct equivalent of sys.exit(0) in JavaScript for browser environment
  } else if (n < 1 || n > 6) {
    // Changed 'and' to '||' to match the Python logic
    console.log('Invalid Operation')
  }
}


/////////////////////////////
function reverse(n) {
  let rev = 0
  while (n > 0) {
    let rem = n % 10
    rev = rev * 10 + rem
    n = Math.floor(n / 10)
  }
  return rev
}

let n = parseInt(prompt('Enter a number:'))
let result = reverse(n)
console.log(result)

/////////////////////////////

function checkPalindrome(num) {
  return num === reverse(num)
}

let num = parseInt(prompt('Enter a number:'))
let isPalindrome = checkPalindrome(num)
if (isPalindrome) {
  console.log('true')
} else {
  console.log('false')
}


/////////////////////////////

function isEven(no) {
  return no % 2 === 0
}

let n = parseInt(prompt('Enter a number:'))
let evenSum = 0
let oddSum = 0
while (n > 0) {
  let rem = n % 10
  if (isEven(rem)) {
    evenSum += rem
  } else {
    oddSum += rem
  }
  n = Math.floor(n / 10)
}
console.log(evenSum + ' ' + oddSum)



/////////////////////////////

function fibonacci(n) {
  if (n < 0) {
    console.log('Incorrect input')
  } else if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(parseInt(prompt('Enter a number:'))))
