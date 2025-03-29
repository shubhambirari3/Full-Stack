// Check number
// Given an integer n, find if n is positive, negative or 0.
// If n is positive, print "Positive"
// If n is negative, print "Negative"
// And if n is equal to 0, print "Zero".

let n = parseInt(prompt('Enter an integer:'))
if (n > 0) {
  console.log('Positive')
} else if (n < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}


// Sum of n numbers
// Given an integer n, find and print the sum of numbers from 1 to n.
// Note: Use while loop only.

let n = parseInt(prompt("Enter an integer:"));
let count = 1;
let sum = 0;
while (count <= n) {
    sum += count;
    count++;
}
console.log(sum);





// Sum of Even Numbers
// Given a number N, print sum of all even numbers from 1 to N.

let n = parseInt(prompt("Enter an integer:"));
let count = 2;
let sum = 0;
while (count <= n) {
    sum += count;
    count += 2;
}
console.log(sum);



// Fahrenheit to Celsius
// Given Start Fahrenheit Value (S), End Fahrenheit value (E) and Step Size (W),
// convert all Fahrenheit values from Start to End at the gap of W into Celsius.

let fh1 = parseInt(prompt("Enter start Fahrenheit value:"));
let fh2 = parseInt(prompt("Enter end Fahrenheit value:"));
let step = parseInt(prompt("Enter step size:"));
while (fh1 <= fh2) {
    let c = parseInt((fh1 - 32) * 5 / 9);
    console.log(fh1 + "\t" + c);
    fh1 += step;
}



// Calculator
// Based on input choice, perform the arithmetic operation between two numbers.

while (true) {
    let ch = parseInt(prompt("Enter operation code (1:Add, 2:Subtract, 3:Multiply, 4:Divide, 5:Remainder, 6:Exit):"));
    if (ch === 6) {
        break;
    }

    let a = parseInt(prompt("Enter first integer:"));
    let b = parseInt(prompt("Enter second integer:"));
    let c;

    switch (ch) {
        case 1:
            c = a + b;
            console.log(c);
            break;
        case 2:
            c = a - b;
            console.log(c);
            break;
        case 3:
            c = a * b;
            console.log(c);
            break;
        case 4:
            c = Math.floor(a / b);
            console.log(c);
            break;
        case 5:
            c = a % b;
            console.log(c);
            break;
        default:
            console.log("Invalid Operation");
            break;
    }
}




// Reverse of a Number
// Generate the reverse of a given number N.

let n = parseInt(prompt("Enter an integer:"));
let rev = 0;
while (n > 0) {
    let l = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + l;
}
console.log(rev);



// Palindrome Number
// Determine if given number is a palindrome.

let n = parseInt(prompt("Enter an integer:"));
let nClone = n;
let rev = 0;
while (n > 0) {
    let l = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + l;
}
console.log(nClone === rev ? "true" : "false");




// Sum of Even & Odd
// Input an integer N and print the sum of all its even and odd digits separately.

let n = parseInt(prompt("Enter an integer:"));
let evenSum = 0;
let oddSum = 0;
while (n > 0) {
    let d = n % 10;
    if (d % 2 === 0) {
        evenSum += d;
    } else {
        oddSum += d;
    }
    n = Math.floor(n / 10);
}
console.log(evenSum + " " + oddSum);




// Nth Fibonacci Number
// Find out the Nth Fibonacci Number.

let n = parseInt(prompt("Enter the position of the Fibonacci number:"));
let counter = 1;
let first = 1;
let second = 1;
while (counter < n) {
    let temp = first + second;
    first = second;
    second = temp;
    counter++;
}
console.log(first);



































































