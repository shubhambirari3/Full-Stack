//////////////////////////
function increment(a) {
  a = a + 2
  return a
}
let a = 2
a = increment(a)
// console.log(a); // Output: 4
//////////////////////////

function increment(li) {
  li[0] = li[0] + 2
  return
}

let li = [1, 2, 3, 4]
increment(li)
// console.log(li); // Output: [3, 2, 3, 4]
//////////////////////////

function increment(li) {
  li = [3, 3, 4]
  return li
}

li = [1, 2, 3, 4]
li = increment(li)
// console.log(li); // Output: [3, 3, 4]
//////////////////////////

//Predict the output
function change(li) {
  li[1] = li[1] + 2
}
li = [1, 2, 3, 4, 5]
change(li)
// console.log(li); // Output: [1, 4, 3, 4, 5]
//////////////////////////

//Predict the output
function change(li) {
  li[1] = li[1] + 2
  li = [3, 3, 3, 4, 5]
}
li = [1, 2, 3, 4, 5]
change(li)
// console.log(li); // Output: [1, 4, 3, 4, 5]
