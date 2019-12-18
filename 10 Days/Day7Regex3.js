function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re = /\d+/g;
    /*
     * Do not remove the return statement
     */
    return re;
}

// \d	A single digit character (i.e., [0-9]).
// g: global match.


// Day 7: Regular Expressions III

// Wed Dec 18, 2019

// Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .

// Constraints

// The length of string  is  .
// It's guaranteed that string  contains at least one integer.
// Output Format

// The function must return a RegExp object that matches every integer in some string .

// Sample Input 0

// 102, 1948948 and 1.3 and 4.5
// Sample Output 0

// 102
// 1948948
// 1
// 3
// 4
// 5
// Explanation 0

// When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].

// Sample Input 1

// 1 2 3
// Sample Output 1

// 1
// 2
// 3
// Explanation 1

// When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '1', '2', '3' ].