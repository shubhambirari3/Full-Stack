// Snippet 1: Checking the type of a boolean variable
let a = true;
let b = false;

let c = "Ninjas";
console.log(typeof b); // Output: boolean
//////////////////////////////////////

// ### Relational Operators (<, >, <=, >=, ==, !=)
let a = 10;
let b = 20;
console.log(a > b);   // Output: false - a is greater than b
console.log(a < b);   // Output: true - a is less than b
console.log(a >= b);  // Output: false - a is greater than or equal to b 
console.log(a <= b);  // Output: true - a is less than or equal to b 
console.log(a == b);  // Output: false - a is equal to b
console.log(a != b);  // Output: true - a is not equal to b

//////////////////////////////////////
// ### Logical Operators (and, or, not)
let a = 10;
let b = 20;
let c1 = a > 10;
let c2 = b > 10;
let r1 = c1 && c2;
let r2 = c1 || c2;
let r3 = !(c1);
console.log(r1); // Output: false
console.log(r2); // Output: true
console.log(r3); // Output: true

//////////////////////////////////////
let a = true || false
if (a) {
  console.log('If Block')
  console.log('Woohoo!')
} else {
  console.log('Else Block')
}

//////////////////////////////////////

// Assuming n is provided by some input mechanism
let n = parseInt(prompt("Enter a number:"));
if (n % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//////////////////////////////////////
let n = 15
if (n >= 1 && n <= 10) {
  console.log('too low')
} else if (n > 10 && n <= 20) {
  // Fixed the condition to use '>' for correct range checking
  console.log('medium')
} else if (n > 20 && n <= 30) {
  console.log('large')
} else {
  console.log('too large')
}
//////////////////////////////////////

let n = 10
if (n >= 1 && n < 10) {
  // Fixed the condition to '<' to avoid overlap
  console.log('too low')
} else if (n >= 10 && n <= 20) {
  console.log('medium')
} else if (n > 20 && n <= 30) {
  console.log('large')
} else {
  console.log('too large')
}


//////////////////////////////////////
let x = 15
if (x <= 15) {
  console.log('Inside if')
} else {
  console.log('Inside else')
}
