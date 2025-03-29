// ### Pattern 

// For N = 4 
// 1
// 11
// 111
// 1111

// Assuming n is provided by some input mechanism like prompt in browser environment
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += "1";
    j++;
  }
  console.log(line);
  i++;
}



Code Cell 2: Print 0s Triangle Pattern
// 0
// 00
// 000
// 0000
// 00000



let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += "0";
    j++;
  }
  console.log(line);
  i++;
}
Code Cell 3: Print Custom Number Triangle Pattern
// 1
// 11
// 202
// 3003
// 40004
// 500005

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    if (i === 1 && j === i) {
      line += "1";
    } else if (j === 1) {
      line += (j + i - 2);
    } else if (j === i) {
      line += (j - 1);
    } else {
      line += "0";
    }
    j++;
  }
  console.log(line);
  i++;
}
// Code Cell 4: Print Modified Number Triangle Pattern
// 1
// 11
// 121
// 1221
// 12221
// 122221

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    if (i === 1 && j === i) {
      line += "1";
    } else if (j === 1 || j === i) {
      line += "1";
    } else {
      line += "2";
    }
    j++;
  }
  console.log(line);
  i++;
}
// Code Cell 5: Print Increasing Number Inverted Triangle Pattern

// # Inverted Triangular Pattern 
// 1234
// 123
// 12
// 1
let n = parseInt(prompt("Enter the number of rows:"));
let i = 0;
while (i <= n) {
  let j = 1;
  let temp = 1;
  let line = '';
  while (j <= n - i) {
    line += temp;
    j++;
    temp++;
  }
  console.log(line);
  i++;
}
// Code Cell 6: Print Alphabet Triangle Pattern
// A
// BB
// CCC
// DDDD
// EEEEE
// FFFFFF
// GGGGGGG

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += String.fromCharCode('A'.charCodeAt(0) + i - 1);
    j++;
  }
  console.log(line);
  i++;
}
// Code Cell 7 is a comment that shows an example output for an alphabet pattern. Here is how you would generate such a pattern in :

// Code Cell 7: Print Alphabet Triangle Pattern
// A
// AB
// ABC
// ABCD

let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let j = 1;
  let line = '';
  while (j <= i) {
    line += String.fromCharCode('A'.charCodeAt(0) + j - 1);
    j++;
  }
  console.log(line);
  i++;
}