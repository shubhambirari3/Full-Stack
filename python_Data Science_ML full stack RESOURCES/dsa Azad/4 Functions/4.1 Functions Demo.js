// Equivalent of: n = int(input())
let n = parseInt(prompt('Enter n'), 10)
let r = parseInt(prompt('Enter r'), 10)

let n_fact = 1
for (let i = 1; i <= n; i++) {
  n_fact *= i
}

let r_fact = 1
for (let i = 1; i <= r; i++) {
  r_fact *= i
}

let n_r_fact = 1
for (let i = 1; i <= n - r; i++) {
  n_r_fact *= i
}

let ans = n_fact / (r_fact * n_r_fact)
// console.log(ans);

/////////////////////////

function fact(n) {
  let n_fact = 1
  for (let i = 1; i <= n; i++) {
    n_fact *= i
  }
  return n_fact
}

n = parseInt(prompt('Enter n'), 10)
// console.log(fact(n));

/////////////////////////

n = parseInt(prompt('Enter n'), 10)
r = parseInt(prompt('Enter r'), 10)
let n_fact = fact(n)
let r_fact = fact(r)
let n_r_fact = fact(n - r)

ans = n_fact / (r_fact * n_r_fact)
// console.log(ans);

/////////////////////////

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

n = parseInt(prompt('Enter n'), 10)
if (isPrime(n)) {
  // console.log(n + " is prime");
} else {
  // console.log(n + " is not prime");
}

/////////////////////////

function primeFrom2ToN(n) {
  for (let k = 2; k <= n; k++) {
    if (isPrime(k)) {
      // console.log(k);
    }
  }
}

n = parseInt(prompt('Enter n'), 10)
primeFrom2ToN(n)

/////////////////////////

function ncr(n, r) {
  let n_fact = fact(n)
  let r_fact = fact(r)
  let n_r_fact = fact(n - r)
  let ans = n_fact / (r_fact * n_r_fact)
  return ans
}

// console.log(ncr(5, 2));

/////////////////////////

function func(a) {
  a += 10
  return a
}

let a = 5
// console.log(func(a));

/////////////////////////

// Predict the output
function square(a) {
  let ans = a * a
  return ans
}

a = 4
a = square(a)
// console.log(a);
