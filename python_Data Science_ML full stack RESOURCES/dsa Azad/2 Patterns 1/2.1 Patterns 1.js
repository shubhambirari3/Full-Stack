// 3
// ***
// ***
// ***

// Assuming n is provided by some input mechanism like prompt in browser environment
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= n) {
    line += "*";
    j++;
  }
  console.log(line);
  i++;
}
/////////////////////////////
// 1111
// 2222
// 3333
// 4444
let n = parseInt(prompt('Enter the number of rows:'))
let i = 1
while (i <= n) {
  let j = 1
  let line = ''
  while (j <= n) {
    line += i
    j++
  }
  console.log(line)
  i++
}



// Code Cell 2: Print Column Number Pattern
// 1234
// 1234
// 1234
// 1234

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= n) {
    line += j;
    j++;
  }
  console.log(line);
  i++;
}



Code Cell 3: Print Reverse Column Number Pattern
// 4321
// 4321
// 4321
// 4321

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= n) {
    line += (n - j + 1);
    j++;
  }
  console.log(line);
  i++;
}
// Code Cell 4: Print Increasing Number Triangle Pattern

// 1
// 12
// 123
// 1234
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += j;
    j++;
  }
  console.log(line);
  i++;
}
Code Cell 5: Print Increasing Number Pattern with Starting Number as Row Number

// 1
// 23
// 345
// 4567
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let p = i;
  let line = '';
  while (j <= i) {
    line += p;
    j++;
    p++;
  }
  console.log(line);
  i++;
}
Code Cell 6: Print Increasing Number Pattern with Sequential Numbers

// 1
// 23
// 456
// 78910
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
let p = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += p;
    j++;
    p++;
  }
  console.log(line);
  i++;
}


// Code Cell 9: Alphabet Pattern

// ABCD
// ABCD
// ABCD
// ABCD


let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= n) {
    line += String.fromCharCode('A'.charCodeAt(0) + j - 1);
    j++;
  }
  console.log(line);
  i++;
}
// Code Cell 10: Row-wise Alphabet Pattern


let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let startChar = String.fromCharCode('A'.charCodeAt(0) + i - 1);
  let line = '';
  while (j <= n) {
    line += String.fromCharCode(startChar.charCodeAt(0) + j - 1);
    j++;
  }
  console.log(line);
  i++;
}

