#Inverted Number Pattern
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    4444
    333
    22
    1
"""
Sample Input :
5
Sample Output :
55555
4444
333
22
1

// Inverted Number Pattern
// Given N, print N lines such that each line contains N-i+1 integers where i is the line number.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= n - i + 1; j++) {
    row += (n - i + 1);
  }
  console.log(row);
}



#Mirror Number Pattern
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    ...1
    ..12
    .123
    1234
The dots represent spaces.
"""
Sample Input :
3
Sample Output :
  1
 12
123

Solution :
// Mirror Number Pattern
// For a given N, prints numbers from 1 to i where i is the current row number. 
// Each number is preceded by spaces to create a mirrored appearance.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let s = 1; s <= n - i; s++) {
    row += ' ';
  }
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}



#Star Pattern
"""
Print the following pattern
Pattern for N = 4
    ...*
    ..***
    .*****
    *******
The dots represent spaces.
"""
Sample Input  :
3
Sample Output  :
   *
  ***
 *****

Solution :
// Star Pattern
// This pattern will create a pyramid of stars, each line having an increment of two stars compared to the previous line.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let s = 1; s <= n - i; s++) {
    row += ' ';
  }
  for (let star = 1; star <= (2 * i - 1); star++) {
    row += '*';
  }
  console.log(row);
}



#Triangle of Numbers
"""
Print the following pattern for the given number of rows.
Pattern for N = 4
    ...1
    ..232
    .34543
    4567654
The dots represent spaces.
"""
Sample Input :
5
Sample Output :
           1
          232
         34543
        4567654
       567898765

// Triangle of Numbers
// This pattern prints a triangle where each row represents a number sequence incrementing from i to 2*i-1 and then decrementing back to i.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let s = 1; s <= n - i; s++) {
    row += ' ';
  }
  let p = i;
  for (let j = 1; j <= i; j++, p++) {
    row += p;
  }
  for (let k = 2 * (i - 1); k >= i; k--) {
    row += k;
  }
  console.log(row);
}



#Diamond of stars
"""
Print the following pattern for the given number of rows.
Note: N is always odd.
Pattern for N = 5
    ..*
    .***
    *****
    .***
    ..*
The dots represent spaces.
"""
Sample Input :
3
Sample Output :
  *
 ***
  *

Solution :
// Diamond of Stars
// This pattern will print a diamond shape with stars. 
// The first half increases the number of stars and the second half decreases the number of stars.

const n = parseInt(prompt("Enter an odd number of rows: "), 10);
let n1 = Math.ceil(n / 2), n2 = n1 - 1;
// Upper half of the diamond
for (let i = 1; i <= n1; i++) {
  let row = ' '.repeat(n1 - i) + '*'.repeat(2 * i - 1);
  console.log(row);
}
// Lower half of the diamond
for (let i = n2; i >= 1; i--) {
  let row = ' '.repeat(n2 - i + 1) + '*'.repeat(2 * i - 1);
  console.log(row);
}


#Number Pattern
"""
Print the following pattern for n number of rows.
For eg. N = 5

1        1
12      21
123    321
1234  4321
1234554321
"""
Sample Input :
4
Sample Output :
1      1
12    21
123  321
12344321

Solution :
// Number Pattern
// This pattern prints numbers in a specific format that forms a pyramid with increasing numbers on the left
// and decreasing numbers on the right, separated by spaces.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  row += ' '.repeat(2 * (n - i));
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}


#Zeros and Stars Pattern
"""
Print the following pattern
Pattern for N = 4
*000*000*
0*00*00*0
00*0*0*00
000***000
"""
Sample Input :
3
Sample Output :
*00*00*
0*0*0*0
00***00

// Zeros and Stars Pattern
// This pattern will create a layout of stars and zeros in a specific pattern where stars form a cross (+) shape.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= 2 * n + 1; j++) {
    if (j === i || j === n + 1 || j === 2 * n + 2 - i) {
      row += '*';
    } else {
      row += '0';
    }
  }
  console.log(row);
}


#Pyramid Number Pattern
"""
Print the following pattern for the given number of rows.
Pattern for N = 4
       1
      212
     32123
    4321234
Input format : N (Total no. of rows)
Output format : Pattern in N lines
"""
Sample Input :
5
Sample Output :
        1
       212
      32123
     4321234
    543212345

Solution :
// Pyramid Number Pattern
// This pattern will print a pyramid of numbers that increments and then decrements in each line.

const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
  let row = ' '.repeat(n - i);
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  for (let j = 2; j <= i; j++) {
    row += j;
  }
  console.log(row);
}



#Arrow pattern
"""
Print the following pattern for the given number of rows.
Assume N is always odd.
Note : There is space after every star.
Pattern for N = 7

*
 * *
   * * *
     * * * *
   * * *
 * *
*

"""
Sample Input :
11
Sample Output :
*
 * *
   * * *
     * * * *
       * * * * *
         * * * * * *
       * * * * *
     * * * *
   * * *
 * *
*

Solution :
// Arrow Pattern
// This pattern creates an arrow shape pointing to the right. 
// The number of rows is always odd, and the arrowhead is at the center row.

const n = parseInt(prompt("Enter an odd number of rows: "), 10);
for (let i = 0; i < n; i++) {
  let row = '';
  let maxStars = i <= n / 2 ? i + 1 : n - i;
  row += ' '.repeat(Math.abs(n / 2 - i)) + '* '.repeat(maxStars);
  console.log(row.trimRight());
}
