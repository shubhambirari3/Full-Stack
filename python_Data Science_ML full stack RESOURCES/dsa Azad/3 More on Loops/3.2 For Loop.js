// Equivalent of: a = "Fazeel"
let a = 'Fazeel'
for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

// Equivalent of the section breaks
/////////////////////////////////////

// Equivalent of: print numbers from 1 to n
let n = parseInt(prompt('Enter a number'), 10)
for (let i = 1; i <= n; i++) {
  console.log(i)
}

/////////////////////////////////////

// Equivalent of: Only one value to range
n = parseInt(prompt('Enter a number'), 10)
for (let i = 0; i <= n; i++) {
  console.log(i)
}

/////////////////////////////////////

// Equivalent of: Only two values to range
n = parseInt(prompt('Enter a number'), 10)
for (let i = 1; i <= n; i++) {
  console.log(i)
}

/////////////////////////////////////

// Equivalent of: print numbers from n to 1
n = parseInt(prompt('Enter a number'), 10)
for (let i = n; i > 0; i--) {
  console.log(i)
}

/////////////////////////////////////

// Equivalent of: Predict the Output
for (let i = 1; i < 5; i += 2) {
  // Use `process.stdout.write` in Node.js to print on the same line
  console.log(i + ' ')
}

/////////////////////////////////////

// Equivalent of: Predict the Output
for (let i = 0; i < 5; i++) {
  console.log(i + ' ')
}

/////////////////////////////////////

// Equivalent of: Print Multiples of 3 {a<b}
let a = parseInt(prompt('Enter the value of a'), 10)
let b = parseInt(prompt('Enter the value of b'), 10)
for (let i = a; i <= b; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

/////////////////////////////////////

// Equivalent of: Print Multiples of 3 (Optimised One) {a<b}
a = parseInt(prompt('Enter the value of a'), 10)
b = parseInt(prompt('Enter the value of b'), 10)
let s
if (a % 3 === 0) {
  s = a
} else if (a % 3 === 1) {
  s = a + 2
} else {
  s = a + 1
}

for (let i = s; i <= b; i += 3) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

/////////////////////////////////////

// Equivalent of: check if a number is prime or not using for loop
n = parseInt(prompt('Enter a number'), 10)
let flag = false
for (let d = 2; d < n; d++) {
  if (n % d === 0) {
    flag = true
    break
  }
}

if (flag) {
  console.log('Not Prime')
} else {
  console.log('Prime')
}

/////////////////////////////////////

// Equivalent of the pyramid pattern
n = parseInt(prompt('Enter a number'), 10)
for (let i = 1; i <= n; i++) {
  let str = ''
  for (let s = n - i; s > 0; s--) {
    str += ' '
  }
  for (let j = i; j < 2 * i; j++) {
    str += j
  }
  for (let k = 2 * i - 2; k >= i; k--) {
    str += k
  }
  console.log(str)
}

/////////////////////////////////////
