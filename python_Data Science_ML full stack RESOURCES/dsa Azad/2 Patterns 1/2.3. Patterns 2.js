

Code Cell 1: Right-aligned Pyramid Pattern of Stars
//     *
//    **
//   ***
//  ****
// *****

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

// Right Angled Triangle
//     1
//    12
//   123
//  1234
// 12345 
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
// Code Cell 3: Right-aligned Pyramid Pattern with Increasing and Decreasing Numbers

// Double Triangle
//     1
//    121
//   12321
//  1234321
// 123454321 
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







