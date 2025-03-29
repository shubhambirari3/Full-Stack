///////////////////
function getInputArray() {
  // This function is a placeholder for input. In a real scenario, you might use prompts or another input mechanism.
  return [1, 2, 3, 4, 5] // Example array, replace with actual input
}

function removeDuplicates(li) {
  let k = 0
  for (let i = 0; i < li.length; i++) {
    i = k
    if (li[i] === li[i + 1]) {
      li.splice(i, 1)
      li.splice(i, 1)
      if (li.length === 1) {
        break
      }
    } else {
      k++
    }
  }
  for (let ele of li) {
    // console.log(ele);
  }
}
let li = getInputArray()
removeDuplicates(li)

///////////////////
function printDuplicates(list) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[i + 1]) {
      // console.log(list[i]);
    }
  }
}
let list = getInputArray()
printDuplicates(list)

///////////////////
function printIntersection(li1, li2) {
  let li3 = []
  for (let i = 0; i < li1.length; i++) {
    for (let j = 0; j < li2.length; j++) {
      if (li1[i] === li2[j]) {
        li3.push(li1[i])
        li2.splice(j, 1)
        break
      }
    }
  }
  for (let ele of li3) {
    // console.log(ele);
  }
}
let li1 = getInputArray()
let li2 = getInputArray()
printIntersection(li1, li2)

///////////////////
function pair_sum(a, b) {
  let result = [a, b]
  // Custom sort function
  result.sort(function (x, y) {
    return x - y
  })
  // console.log(result.join(" "));
}

function findPairs(list, key) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === key) {
        pair_sum(list[i], list[j])
      }
    }
  }
}
let key = 5 // Example key, replace with actual input
findPairs(list, key)

///////////////////
function pair_sum_three(a, b, c) {
  let list3 = [a, b, c]
  // Custom sort function
  list3.sort(function (x, y) {
    return x - y
  })
  // console.log(list3.join(" "));
}

function findTriplets(list, key) {
  for (let i = 0; i < list.length - 2; i++) {
    for (let j = i + 1; j < list.length - 1; j++) {
      for (let k = j + 1; k < list.length; k++) {
        if (list[i] + list[j] + list[k] === key) {
          pair_sum_three(list[i], list[j], list[k])
        }
      }
    }
  }
}
findTriplets(list, key)

///////////////////
function sortBinaryArray(list) {
  let count0 = 0
  let count1 = 0
  for (let i of list) {
    if (i === 0) {
      count0++
    } else {
      count1++
    }
  }
  let sortedList = []
  for (let i = 0; i < count0; i++) {
    sortedList.push(0)
  }
  for (let i = 0; i < count1; i++) {
    sortedList.push(1)
  }
  // console.log(sortedList.join(" "));
}
sortBinaryArray(list)
