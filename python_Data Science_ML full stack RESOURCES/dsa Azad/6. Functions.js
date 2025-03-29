// Fahrenheit to Celsius Function

/*
Given three values - Start Fahrenheit Value (S), End Fahrenheit value (E) and Step Size (W),
you need to convert all Fahrenheit values from Start to End at the gap of W,
into their corresponding Celsius values and print the table.
*/

// Sample Input:
// 0 100 20
// Sample Output:
// 0   -17
// 20  -6
// 40  4
// 60  15
// 80  26
// 100 37

function printFahrenheitCelsiusTable(start, end, step) {
  for (let f = start; f <= end; f += step) {
    let celsius = parseInt(((f - 32) * 5) / 9)
    console.log(`${f}\t${celsius}`)
  }
}

// Fibonacci Member

/*
Given a number N, figure out if it is a member of the Fibonacci series or not.
Return true if the number is a member of the Fibonacci series, else false.
Fibonacci Series is defined by the recurrence
    F(n) = F(n-1) + F(n-2)
where F(0) = 0 and F(1) = 1
*/

// Sample Input:
// 5
// Sample Output:
// true

function isFibonacciMember(n) {
  let prev = 1,
    curr = 1
  while (curr < n) {
    let temp = curr + prev
    prev = curr
    curr = temp
  }
  return curr === n
}

// Palindrome Number

/*
Write a program to determine if a given number is a palindrome or not.
Print true if it is a palindrome, false otherwise.
Palindromes are numbers for which the reverse is exactly the same as the original one. For eg. 121
*/

// Sample Input:
// 121
// Sample Output:
// true

function isPalindrome(n) {
  let nClone = n
  let reverse = 0
  while (n > 0) {
    let lastDigit = n % 10
    n = Math.floor(n / 10)
    reverse = reverse * 10 + lastDigit
  }
  return nClone === reverse
}

// Check Armstrong

/*
Write a Program to determine if the given number is an Armstrong number or not.
Print true if the number is Armstrong, otherwise print false.
An Armstrong number is a number (with digits n)
such that the sum of its digits raised to the nth power is equal to the number itself.
*/

// Sample Input:
// 371
// Sample Output:
// true

function isArmstrongNumber(num) {
  let order = num.toString().length
  let sum = 0
  let temp = num
  while (temp > 0) {
    let digit = temp % 10
    sum += Math.pow(digit, order)
    temp = Math.floor(temp / 10)
  }
  return num === sum
}

// To use the functions, you would call them with the appropriate inputs, for example:
// printFahrenheitCelsiusTable(0, 100, 20);
// console.log(isFibonacciMember(5)); // Should output: true
// console.log(isPalindrome(121)); // Should output: true
// console.log(isArmstrongNumber(371)); // Should output: true
