#Binary Search
"""
You have been given a sorted(in ascending order) integer array/list(ARR) of size N and an element X.
Write a function to search this element in the given input array/list using 'Binary Search'.
Return the index of the element in the input array/list.
In case the element is not present in the array/list, then return -1.

Input format :
The first line contains an Integer 'N' which denotes the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Third line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow..

All the 't' lines henceforth, will take the value of X to be searched for in the array/list

Output Format :
For each test case, print the index at which X is present, -1 otherwise.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
7
1 3 7 9 11 12 45
1
3
Sample Output 1:
1

Sample Input 2:
7
1 2 3 4 5 6 7
2
9
7
Sample Output 2:
-1
6

// Binary Search

/*
Given a sorted(in ascending order) integer array/list(ARR) and an element X,
use 'Binary Search' to search this element in the given input array/list.
Return the index of the element in the input array/list.
If the element is not present, return -1.
*/

// Sample Input:
// 7
// 1 3 7 9 11 12 45
// 3
// Sample Output:
// 1

function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === element) {
            return mid;
        } else if (arr[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

#Bubble Sort
"""
Provided with a random integer array/list(ARR) of size N,
you have been required to sort this array using 'Bubble Sort'.

Note:
Change in the input array/list itself. You don't need to return or print the elements.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Output format :
For each test case, print the elements of the array/list in sorted order separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
2 13 4 1 3 6 28
Sample Output 1:
1 2 3 4 6 13 28

Sample Input 2:
2
5
9 3 6 2 0
4
4 3 2 1
Sample Output 2:
0 2 3 6 9
1 2 3 4

// Bubble Sort

/*
Given a random integer array/list(ARR) of size N,
sort this array using 'Bubble Sort'.
*/

// Sample Input:
// 7
// 2 13 4 1 3 6 28
// Sample Output:
// 1 2 3 4 6 13 28

function bubbleSort(arr) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}


#Insertion Sort
"""
Provided with a random integer array/list(ARR) of size N,
you have been required to sort this array using 'Insertion Sort'.

Note:
Change in the input array/list itself. You don't need to return or print the elements.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Output Format :
For each test case, print the elements of the array/list in sorted order separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
2 13 4 1 3 6 28
Sample Output 1:
1 2 3 4 6 13 28

Sample Input 2:
2
5
9 3 6 2 0
4
4 3 2 1
Sample Output 2:
0 2 3 6 9
1 2 3 4
// Insertion Sort

/*
Given a random integer array/list(ARR) of size N,
sort this array using 'Insertion Sort'.
*/

// Sample Input:
// 7
// 2 13 4 1 3 6 28
// Sample Output:
// 1 2 3 4 6 13 28

function insertionSort(arr) {
    let length = arr.length;

    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}


#Merge Two Sorted Arrays
"""
You have been given two sorted arrays/lists(ARR1 and ARR2) of size N and M respectively,
merge them into a third array/list such that the third array is also sorted.

Input Format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the first array/list.

Second line contains 'N' single space separated integers representing the elements of the first array/list.

Third line contains an integer 'M' representing the size of the second array/list.

Fourth line contains 'M' single space separated integers representing the elements of the second array/list.

Output Format :
For each test case, print the sorted array/list(of size N + M) in a single row, separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1 :
1
5
1 3 4 7 11
4
2 4 6 13
Sample Output 1 :
1 2 3 4 4 6 7 11 13

Sample Input 2 :
2
3
10 100 500
7
4 7 9 25 30 300 450
4
7 45 89 90
0
Sample Output 2 :
4 7 9 10 25 30 100 300 450 500
7 45 89 90
// Merge Two Sorted Arrays

/*
Given two sorted arrays/lists(ARR1 and ARR2) of size N and M respectively,
merge them into a third array/list such that the third array is also sorted.
*/

// Sample Input:
// 5
// 1 3 4 7 11
// 4
// 2 4 6 13
// Sample Output:
// 1 2 3 4 4 6 7 11 13

function mergeTwoSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;

    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < len1) {
        merged.push(arr1[i++]);
    }

    while (j < len2) {
        merged.push(arr2[j++]);
    }

    return merged;
}


#Push Zeros to end
"""
You have been given a random integer array/list(ARR) of size N.
You have been required to push all the zeros that are present in the array/list to the end of it.
Also, make sure to maintain the relative order of the non-zero elements.

Note:
Change in the input array/list itself. You don't need to return or print the elements.
You need to do this in one scan of array only. Don't use extra space.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Output Format :
For each test case, print the elements of the array/list in the desired order separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
2 0 0 1 3 0 0
Sample Output 1:
2 1 3 0 0 0 0
Explanation for the Sample Input 1 :
All the zeros have been pushed towards the end of the array/list.
Another important fact is that the order of the non-zero elements have been maintained as they appear in the input array/list.
Sample Input 2:
2
5
0 3 0 2 0
4
9 0 0 8 2
Sample Output 2:
3 2 0 0 0
9 8 2 0 0

// Push Zeros to end

/*
Given a random integer array/list(ARR) of size N,
push all the zeros to the end of the array/list.
*/

// Sample Input:
// 7
// 2 0 0 1 3 0 0
// Sample Output:
// 2 1 3 0 0 0 0

function pushZerosToEnd(arr) {
    let count = 0; // Count of non-zero elements

    // Traverse the array. If element encountered is non-zero, then
    // replace the element at index 'count' with this element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i]; // here count is incremented
        }
    }

    // Now all non-zero elements have been shifted to the front and 'count' is set
    // as the index of the first 0. Make all elements 0 from count to the end.
    while (count < arr.length) {
        arr[count++] = 0;
    }
}

#Rotate array
"""
You have been given a random integer array/list(ARR) of size N.
Write a function that rotates the given array/list by D elements(towards the left).

Note:
Change in the input array/list itself. You don't need to return or print the elements.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Third line contains the value of 'D' by which the array/list needs to be rotated.

Output Format :
For each test case, print the rotated array/list in a row separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
1 2 3 4 5 6 7
2
Sample Output 1:
3 4 5 6 7 1 2

Sample Input 2:
2
7
1 2 3 4 5 6 7
0
4
1 2 3 4
2
Sample Output 2:
1 2 3 4 5 6 7
3 4 1 2

// Rotate array

/*
Given a random integer array/list(ARR) of size N and a number D,
rotate the array/list to the left by D elements.
*/

// Sample Input:
// 7
// 1 2 3 4 5 6 7
// 2
// Sample Output:
// 3 4 5 6 7 1 2

function rotateArray(arr, d) {
    d = d % arr.length;
    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, arr.length - 1);
    reverseArray(arr, 0, arr.length - 1);
}

function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


#Second Largest in array
"""
You have been given a random integer array/list(ARR) of size N.
You are required to find and return the second largest element present in the array/list.
If N <= 1 or all the elements are same in the array/list then return -2147483648 or -2 ^ 31(It is the smallest value for the range of Integer)

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Output Format :
For each test case, print the second largest in the array/list if exists, -2147483648 otherwise.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
2 13 4 1 3 6 28
Sample Output 1:
13

Sample Input 2:
1
5
9 3 6 2 9
Sample Output 2:
6

Sample Input 3:
2
2
6 6
4
90 8 90 5
Sample Output 3:
-2147483648
8

// Second Largest in array

/*
Given a random integer array/list(ARR) of size N,
find and return the second largest element present in the array/list.
*/

// Sample Input:
// 7
// 2 13 4 1 3 6 28
// Sample Output:
// 13

function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    return second === -Infinity ? -2147483648 : second;
}

#Check Array Rotation
"""
You have been given an integer array/list(ARR) of size N.
It has been sorted(in increasing order) and then rotated by some number 'K' in the clockwise direction.
Your task is to write a function that returns the value of 'K',
that means, the index from which the array/list has been rotated.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Output Format :
For each test case, print the value of 'K' or the index from which which the array/list has been rotated.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
6
5 6 1 2 3 4
Sample Output 1:
2

Sample Input 2:
2
5
3 6 8 9 10
4
10 20 30 1
Sample Output 2:
0
3

Solution :

// Check Array Rotation

/*
Given an integer array/list(ARR) of size N sorted and then rotated by some number 'K',
find the value of 'K' which is the index from which the array/list has been rotated.
*/

// Sample Input:
// 6
// 5 6 1 2 3 4
// Sample Output:
// 2

// Check Array Rotation
function checkArrayRotation(arr) {
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return i + 1;
        }
    }

    return 0;
}
#Sort 0 1 2
"""
You are given an integer array/list(ARR) of size N. It contains only 0s, 1s and 2s.
Write a solution to sort this array/list in a 'single scan'.
'Single Scan' refers to iterating over the array/list just once or to put it in other words,
you will be visiting each element in the array/list just once.

Note:
You need to change in the given array/list itself. Hence, no need to return or print anything.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers(all 0s, 1s and 2s) representing the elements in the array/list.

Output Format :
For each test case, print the sorted array/list elements in a row separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
7
0 1 2 0 2 0 1
Sample Output 1:
0 0 0 1 1 2 2

Sample Input 2:
2
5
2 2 0 1 1
7
0 1 2 0 1 2 0
Sample Output 2:
0 1 1 2 2
0 0 0 1 1 2 2

// Sort 0 1 2

/*
Given an integer array/list(ARR) of size N containing only 0s, 1s, and 2s,
sort this array/list in a single scan.
*/

// Sample Input:
// 7
// 0 1 2 0 2 0 1
// Sample Output:
// 0 0 0 1 1 2 2

function sort012(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    let mid = 0;
    while (mid <= hi) {
        switch (arr[mid]) {
            case 0:
                [arr[lo++], arr[mid++]] = [arr[mid], arr[lo]];
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[mid], arr[hi--]] = [arr[hi], arr[mid]];
                break;
        }
    }
}

#Sum of Two Arrays
"""
Two random integer arrays/lists have been given as ARR1 and ARR2 of size N and M respectively.
Both the arrays/lists contain numbers from 0 to 9(i.e. single digit integer is present at every index).
The idea here is to represent each array/list as an integer in itself of digits N and M.
You need to find the sum of both the input arrays/list treating them as two integers and put the result in another array/list i.e. output array/list will also contain only single digit at every index.

Note:
The sizes N and M can be different. 
Output array/list(of all 0s) has been provided as a function argument. 
Its size will always be one more than the size of the bigger array/list. Place 0 at the 0th index if there is no carry. 
No need to print the elements of the output array/list.

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run.
Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the first array/list.

Second line contains 'N' single space separated integers representing the elements of the first array/list.

Third line contains an integer 'M' representing the size of the second array/list.

Fourth line contains 'M' single space separated integers representing the elements of the second array/list.

Output Format :
For each test case, print the required sum of the arrays/list in a row, separated by a single space.
Output for every test case will be printed in a separate line.
"""
Sample Input 1:
1
3
6 2 4
3
7 5 6
Sample Output 1:
1 3 8 0

Sample Input 2:
2
3
8 5 2
2
1 3
4
9 7 6 1
3
4 5 9
Sample Output 2:
0 8 6 5
1 0 2 2 0

Solution :

// Sum of Two Arrays

/*
Given two integer arrays/lists ARR1 and ARR2 of size N and M,
find the sum treating them as two integers and put the result in another array/list.
*/

// Sample Input:
// 3
// 6 2 4
// 3
// 7 5 6
// Sample Output:
// 1 3 8 0

function sumOfTwoArrays(arr1, arr2, output) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let carry = 0;
    let k = Math.max(arr1.length, arr2.length); // output array size

    while (i >= 0 && j >= 0) {
        let sum = arr1[i] + arr2[j] + carry;
        output[k] = sum % 10;
        carry = Math.floor(sum / 10);
        i--;
        j--;
        k--;
    }

    // If arr1 is larger
    while (i >= 0) {
        let sum = arr1[i] + carry;
        output[k] = sum % 10;
        carry = Math.floor(sum / 10);
        i--;
        k--;
    }

    // If arr2 is larger
    while (j >= 0) {
        let sum = arr2[j] + carry;
        output[k] = sum % 10;
        carry = Math.floor(sum / 10);
        j--;
        k--;
    }

    // remaining carry
    output[k] = carry;
}
