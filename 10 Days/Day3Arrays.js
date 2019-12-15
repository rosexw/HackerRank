const nums = [2,3,6,6,5]

function getSecondLargest(nums) {
    // Complete the function
    let largestNum = 0;
    let secondLargest = 0;
    for (let num of nums) {
        if (num > largestNum) {
            largestNum = num;
        }
    }
    for (let num of nums) {
        if (num > secondLargest && num !== largestNum) {
            secondLargest = num;
        }
    }
    return secondLargest;
}


console.log(getSecondLargest(nums));


// Day 3: Arrays

// Sat Dec 14, 2019

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Task

// Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

// Input Format

// Locked stub code in the editor reads the following input from stdin and passes it to the function:
// The first line contains an integer, , denoting the size of the  array.
// The second line contains  space-separated numbers describing the elements in .

// Constraints

// , where  is the number at index .
// The numbers in  are not distinct.
// Output Format

// Return the value of the second largest number in the  array.

// Sample Input 0

// 5
// 2 3 6 6 5
// Sample Output 0

// 5
// Explanation 0

// Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.