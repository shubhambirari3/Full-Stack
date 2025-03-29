// #Check Palindrome
// """
// Given a String s, check it its palindrome. Return true if string is palindrome, else return false.
// Palindrome strings are those, where string s and its reverse is exactly same.

// Input Format :
//  String S

// Output Format :
// "true" if S is palindrome, else "false"
// """
// Sample Input 1 :
// abcdcba
// Sample Output 1 :
// true

// Sample Input 2 :
// abcd
// Sample Output 2 :
// false

// Solution :
function reverse(s) {
    return s.split("").reverse().join("");
}

function isPalindrome(s) {
    var rev = reverse(s);
    return s === rev;
}

var s = prompt("Enter a string:");
if (isPalindrome(s)) {
    console.log("true");
} else {
    console.log("false");
}




// #Check Permutation
// """
// Given two strings, S and T, check if they are permutations of each other. Return true or false.
// Permutation means - length of both the strings should same and should contain same set of characters.
// Order of characters doesn't matter.

// Note : Input strings contain only lowercase english alphabets.

// Input format :
// Line 1 : String 1
// Line 2 : String 2

// Output format :
// 'true' or 'false'
// """
// Sample Input 1 :
// abcde
// baedc
// Sample Output 1 :
// true

// Sample Input 2 :
// abc
// cbd
// Sample Output 2 :
// false

// Solution :

const NO_OF_CHARS = 256;
function arePermutation(str1, str2) {
    let count1 = Array(NO_OF_CHARS).fill(0);
    let count2 = Array(NO_OF_CHARS).fill(0);

    for (let i of str1) {
        count1[i.charCodeAt()]++;
    }

    for (let i of str2) {
        count2[i.charCodeAt()]++;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < NO_OF_CHARS; i++) {
        if (count1[i] !== count2[i]) {
            return false;
        }
    }
    return true;
}

var str1 = prompt("Enter first string:");
var str2 = prompt("Enter second string:");
if (arePermutation(str1, str2)) {
    console.log("true");
} else {
    console.log("false");
}



// #Remove Consecutive Duplicates
// """
// Given a string, S, remove all the consecutive duplicates that are present in the given string.
// That means, if 'aaa' is present in the string then it should become 'a' in the output string.

// Input format :
// String S

// Output format :
// Modified string
// """
// Sample Input 1:
// aabccbaa
// Sample Output 1:
// abcba

// Sample Input 2:
// xxyyzxx
// Sample Output 2:
// xyzx

// Solution :

function removeDuplicates(S) {
    let n = S.length;
    if (n < 2) {
        return S;
    }

    let j = 0;
    for (let i = 1; i < n; i++) {
        if (S[j] !== S[i]) {
            j++;
            S[j] = S[i];
        }
    }
    return S.slice(0, j + 1).join('');
}

var S1 = prompt("Enter a string:");
S1 = removeDuplicates([...S1]);
console.log(S1);


// #Reverse Each Word
// """
// Given a string S, reverse each word of a string individually.
// For eg. if a string is "abc def", reversed string should be "cba fed".

// Input Format :
// String S

// Output Format :
// Modified string
// """
// Sample Input 1:
// Welcome to Coding Ninjas
// Sample Output 1:
// emocleW ot gnidoC sajniN

// Sample Input 2:
// Give proper names to variables and functions
// Sample Output 2:
// eviG reporp seman ot selbairav dna snoitcnuf

function removeChars(test_string, x) {
    for (let i of x) {
        test_string = test_string.split(i).join('');
    }
    return test_string;
}

var test_string = prompt("Enter the test string:");
var x = prompt("Enter characters to remove:");
console.log(removeChars(test_string, x));

// #Remove character
// """
// Given a string and a character x.
// Write a function to remove all occurrences of x character from the given string.
// Leave the string as it is, if the given character is not present in the string.

// Input Format :
// Line 1 : String S
// Line 2 : Character c

// Output Format :
// Modified string
// """
// Sample Input 1:
// welcome to coding ninjas
// o
// Sample Output 1:
// welcme t cding ninjas

// Sample Input 2:
// Think of edge cases before submitting solutions
// x
// Sample Output 2:
// Think of edge cases before submitting solutions

// Solution :

function removeChars(test_string, x) {
    for (let i of x) {
        test_string = test_string.split(i).join('');
    }
    return test_string;
}

var test_string = prompt("Enter the test string:");
var x = prompt("Enter characters to remove:");
console.log(removeChars(test_string, x));


// #Highest Occurring Character
// """
// Given a string, S, find and return the highest occurring character present in the given string.
// If there are 2 characters in the input string with same frequency, return the character which comes first.

// Note : Assume all the characters in the given string are lowercase.

// Input format :
// String S

// Output format :
// Highest occurring character
// """
// Sample Input 1:
// abdefgbabfba
// Sample Output 1:
// b

// Sample Input 2:
// xy
// Sample Output 2:
// x

// Solution :

function getMaxOccuringChar(str) {
    let count = new Array(256).fill(0);
    let max = -1;
    let maxChar = '';

    for (let i of str) {
        count[i.charCodeAt()]++;
        if (max < count[i.charCodeAt()]) {
            max = count[i.charCodeAt()];
            maxChar = i;
        }
    }

    return maxChar;
}

var str = prompt("Enter a string:");
console.log(getMaxOccuringChar(str));



// #Compress the String
// """
// Write a program to do basic string compression.
// For a character which is consecutively repeated more than once,
// replace consecutive duplicate occurrences with the count of repetitions.
// For e.g. if a String has 'x' repeated 5 times, replace this "xxxxx" with "x5".

// Note : Consecutive count of every character in input string is less than equal to 9.

// Input Format :
// String S

// Output Format :
// Compressed string 
// """
// Sample Input 1 :
// aaabbccdsa
// Sample Output 1 :
// a3b2c2dsa

// Sample Input 2 :
// aaabbcddeeeee
// Sample Output 2 :
// a3b2cd2e5

// Solution :

function runLengthEncoding(str1) {
    let str2 = '';
    let i = 0;

    while (i < str1.length) {
        let count = 1;
        let temp = str1[i];
        while (i + 1 < str1.length && str1[i] === str1[i + 1]) {
            count++;
            i++;
        }
        str2 += count > 1 ? str1[i] + count.toString() : str1[i];
        i++;
    }
    return str2;
}

var str1 = prompt("Enter a string:");
console.log(runLengthEncoding(str1));