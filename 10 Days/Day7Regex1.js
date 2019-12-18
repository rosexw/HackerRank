function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/;;
    
    /*
     * Do not remove the return statement
     */
    return re;
}


// Day 7: Regular Expressions I

// Wed Dec 18, 2019

// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  is  .
// String  consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

// Sample Input 0

// bcd
// Sample Output 0

// false
// Explanation 0

// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1

// abcd
// Sample Output 1

// false
// Explanation 1

// This string ends in a consonant, so it cannot start and end with the same vowel.

// Sample Input 2

// abcda
// Sample Output 2

// true
// Explanation 2

// This string starts and ends with the same vowel (a).

// Sample Input 3

// abcdo
// Sample Output 3

// false
// Explanation 3

// This string starts with the vowel a but ends in the vowel o.


// https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex


// Let's break down the regular expression (.).*\1:

//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence

// let re = /^([aeiou]).+\1$/;
// let re = /^(a|e|i|o|u).*\1$/;
// var re = new RegExp('^([aeiou]).*\\1$');
// let re = new RegExp(/^([aeiou]).*\1$/);

// (.) captures any character.
// .* stipulates that the captured character must followed by zero or more occurrences of any character.
// \1 is a backreference to the first capture group in our expression (i.e., (.)). It stipulates that the character following whatever we matched in step  must match whatever was captured inside the parentheses in step .