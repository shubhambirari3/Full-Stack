The notebook contains 4 code cells. Let's start by converting the first code cell to .

The Python code from the first cell is:

python

n = int(input())
i = 1
while i <= n:
    spaces = 1
    while spaces <= n-i:
        print(" ", end = '')
        spaces = spaces + 1
    stars = 1
    while stars <= i:
        print('*', end = '')
        stars = stars + 1
    print()
    i = i + 1       
This snippet takes an input n and prints a right-aligned pyramid pattern with n rows.

Here's the  equivalent:



// Assuming n is provided by some input mechanism like prompt in browser environment
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let spaces = 1;
  let line = '';
  while (spaces <= n - i) {
    line += " ";
    spaces++;
  }
  let stars = 1;
  while (stars <= i) {
    line += "*";
    stars++;
  }
  console.log(line);
  i++;
}

Code Cell 1: Right-aligned Pyramid Pattern of Stars


let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let spaces = 1;
  let line = '';
  while (spaces <= n - i) {
    line += " ";
    spaces++;
  }
  let stars = 1;
  while (stars <= i) {
    line += "*";
    stars++;
  }
  console.log(line);
  i++;
}
Code Cell 2: Right-aligned Pyramid Pattern with Increasing Numbers
javascript
// Now, mirror the other part

//    1
//   212
//  32123
// 4321234
let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let spaces = 1;
  let line = '';
  while (spaces <= n - i) {
    line += " ";
    spaces++;
  }
  let inc_num = 1;
  while (inc_num <= i) {
    line += inc_num;
    inc_num++;
  }
  console.log(line);
  i++;
}
Code Cell 3: Right-aligned Pyramid Pattern with Increasing and Decreasing Numbers


let n = parseInt(prompt("Enter the number of rows:"));
let i = 1;
while (i <= n) {
  let spaces = 1;
  let line = '';
  while (spaces <= n - i) {
    line += " ";
    spaces++;
  }
  let inc_num = 1;
  while (inc_num <= i) {
    line += inc_num;
    inc_num++;
  }
  let dec_num = inc_num - 2;
  while (dec_num > 0) {
    line += dec_num;
    dec_num--;
  }
  console.log(line);
  i++;
}