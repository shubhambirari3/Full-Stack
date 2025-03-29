// Assuming n is provided by some input mechanism, e.g., a prompt
let n = parseInt(prompt('Enter a number'), 10)

//////////////////////////

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    if (i % 2 === 1) {
      // console.log(1, "");
    } else {
      // console.log(0, "");
    }
  }
  // console.log("\n");
}

//////////////////////////

for (let i = 1; i <= n; i++) {
  for (let spaces = 1; spaces <= i; spaces++) {
    // console.log(" ", "");
  }
  for (let j = 1; j <= n; j++) {
    if (j < i) {
      continue
    }
    // console.log(j, "");
  }
  // console.log("\n");
}

//////////////////////////

// This block is a duplicate of the previous one and so would produce the same output.

//////////////////////////

for (let i = 1; i <= n; i++) {
  for (let spaces = 1; spaces < i; spaces++) {
    // console.log(" ", "");
  }
  for (let j = i; j <= n; j++) {
    // console.log(j, "");
  }
  // console.log("\n");
}

//////////////////////////

// This block is a duplicate of the previous one and so would produce the same output.

//////////////////////////

let n1 = Math.floor(n / 2) + 1
for (let i = 1; i <= n1; i++) {
  for (let s = 1; s <= n1 - i; s++) {
    // console.log(" ", "");
  }
  for (let i = 1; i < 2 * i; i++) {
    // console.log("*", "");
  }
  // console.log("\n");
}
let n2 = n - n1
for (let i = n2; i > 0; i--) {
  for (let s = 1; s <= n1 - i; s++) {
    // console.log(" ", "");
  }
  for (let i = 1; i < 2 * i; i++) {
    // console.log("*", "");
  }
  // console.log("\n");
}

//////////////////////////

let temp = n

for (let i = 1; i <= n; i++) {
  for (let spaces = 1; spaces < i; spaces++) {
    // console.log(" ", "");
  }
  for (let j = 2 * n - 2 * i + 2; j > 1; j--) {
    // console.log(temp, "");
  }
  temp--
  // console.log("\n");
}
temp = 2
for (let i = n; i > 1; i--) {
  for (let spaces = i; spaces > 1; spaces--) {
    // console.log(" ", "");
  }
  for (let k = 2 * n - i; k >= i - 2; k--) {
    // console.log(temp, "");
  }
  temp++
  // console.log("\n");
}

//////////////////////////

temp = n

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    // No inner loop condition based on 'x' is required in JavaScript
    // console.log(n - j + 1, "");
  }
  for (let k = 2 * n - 2 * i + 2; k > 1; k--) {
    // console.log(temp, "");
  }
  temp--
  for (let j = i; j > 1; j--) {
    // No inner loop condition based on 'x' is required in JavaScript
    // console.log(n - j + 2, "");
  }
  // console.log("\n");
}
temp = 2
for (let i = n; i > 1; i--) {
  for (let spaces = i; spaces > 1; spaces--) {
    // console.log(" ", "");
  }
  for (let k = 2 * n - i; k >= i - 2; k--) {
    // console.log(temp, "");
  }
  temp++
  // console.log("\n");
}

//////////////////////////

temp = n

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    // No inner loop condition based on 'x' is required in JavaScript
    // console.log(n - j + 1, "");
  }
  for (let k = 2 * n - 2 * i + 2; k > 1; k--) {
    // console.log(temp, "");
  }
  temp--
  for (let j = i; j > 1; j--) {
    // No inner loop condition based on 'x' is required in JavaScript
    // console.log(n - j + 2, "");
  }
  // console.log("\n");
}
temp = 2
for (let i = n; i > 1; i--) {
  for (let j = 2; j < i; j++) {
    // console.log(n - j + 2, "");
  }
  for (let k = 2 * n - i; k >= i - 2; k--) {
    // console.log(temp, "");
  }
  for (let x = i - 1; x > 1; x--) {
    // console.log(n - x + 2, "");
  }
  temp++
  // console.log("\n");
}

//////////////////////////

let k = 0
let n1 = n - Math.floor(n / 2)
for (let i = 1; i <= n1; i++) {
  for (let j = 1; j <= n; j++) {
    // console.log(k * n + j, "");
  }
  // console.log("\n");
  k = k + 2
}
let n2 = n - n1
if (n % 2 === 0) {
  k = n - 1
} else {
  k = n - 2
}
for (let i = 1; i <= n2; i++) {
  for (let j = 1; j <= n; j++) {
    // console.log(k * n + j, "");
  }
  // console.log("\n");
  k = k - 2
}
