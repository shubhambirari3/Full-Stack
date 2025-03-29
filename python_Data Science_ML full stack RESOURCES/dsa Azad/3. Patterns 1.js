// #Square Pattern
// """
// Print the following pattern for the given N number of rows.
// Pattern for N = 4
//     4444
//     4444
//     4444
//     4444
// """
// Sample Input 1:
// 7
// Sample Output 1:
// 7777777
// 7777777
// 7777777
// 7777777
// 7777777
// 7777777
// 7777777

// Solution :
// Square Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        row += n;
    }
    console.log(row);
}

// #Triangular Star Pattern
// """
// Print the following pattern for the given N number of rows.
// Pattern for N = 4
//     *
//     **
//     ***
//     ****
// Note : There are no spaces between the stars (*)
// """
// Sample Input :
// 5
// Sample Output :
// *
// **
// ***
// ****
// *****

// Solution :
// Triangular Star Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// #Triangle Number Pattern
// """
// Print the following pattern for the given N number of rows.
// Pattern for N = 4
//     1
//     22
//     333
//     4444
// """
// Sample Input :
// 5
// Sample Output :
// 1
// 22
// 333
// 4444
// 55555

// Triangle Number Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}


#Reverse Number Pattern
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    1
    21
    321
    4321
"""
Sample Input :
5
Sample Output :
1
21
321
4321
54321

Solution :
// Reverse Number Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += (i - j + 1);
    }
    console.log(row);
}



#Character Pattern
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    A
    BC
    CDE
    DEFG
"""
Sample Input :
5
Sample Output :
A
BC
CDE
DEFG
EFGHI

Solution :
// Character Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    let startChar = String.fromCharCode('A'.charCodeAt(0) + i - 1);
    for (let j = 1; j <= i; j++) {
        let char = String.fromCharCode(startChar.charCodeAt(0) + j - 1);
        row += char;
    }
    console.log(row);
}


#Interesting Alphabets
"""
Print the following pattern for the given number of rows.
Pattern for N = 5
    E
    DE
    CDE
    BCDE
    ABCDE
"""
Sample Input :
8
Sample Output :
H
GH
FGH
EFGH
DEFGH
CDEFGH
BCDEFGH
ABCDEFGH

Solution :
// Interesting Alphabets
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    let startChar = String.fromCharCode('A'.charCodeAt(0) + n - 1);
    for (let j = 1; j <= i; j++) {
        let char = String.fromCharCode(startChar.charCodeAt(0) - i + j);
        row += char;
    }
    console.log(row);
}


#Number Pattern 1
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    1
    11
    111
    1111
"""
Sample Input :
5
Sample Output :
1
11
111
1111
11111

Solution :
// Number Pattern 1
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '1';
    }
    console.log(row);
}


#Number Pattern 2
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    1
    11
    202
    3003
"""
Sample Input :
5
Sample Output :
1
11
202
3003
40004

Solution :
// Number Pattern 2
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i) {
            row += i - 1;
        } else {
            row += '0';
        }
    }
    console.log(row);
}



#Number Pattern 3
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    1
    11
    121
    1221
"""
Sample Input :
5
Sample Output :
1
11
121
1221
12221

Solution :
// Number Pattern 3
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i) ? '1' : '2';
    }
    console.log(row);
}


#Number Pattern 4
"""
Print the following pattern for the given N number of rows.
Pattern for N = 4
    1234
    123
    12
    1
"""
Sample Input :
5
Sample Output :
12345
1234
123
12
1

Solution :
// Number Pattern 4
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i + 1; j++) {
        row += j;
    }
    console.log(row);
}


#Alpha Pattern
"""
Print the following pattern for the given N number of rows.
Pattern for N = 3
    A
    BB
    CCC
"""
Sample Input :
7
Sample Output :
A
BB
CCC
DDDD
EEEEE
FFFFFF
GGGGGGG

Solution :
// Alpha Pattern
const n = parseInt(prompt("Enter the number of rows: "), 10);
for (let i = 1; i <= n; i++) {
    let row = '';
    let char = String.fromCharCode('A'.charCodeAt(0) + i - 1);
    for (let j = 1; j <= i; j++) {
        row += char;
    }
    console.log(row);
}

