// 10Days Day 2 Conditional Statements If Else

// Objective

// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

// If 25<score<=30, then grade=A.
// If 20<score<=25, then grade=B.
// If 15<score<=20, then grade=C.
// If 25<score<=30, then grade=D.
// If 25<score<=30, then grade=A.
// If 25<score<=30, then grade=F.
// Input Format

// Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

// Constraints

// Output Format

// The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

// Sample Input 0

// 11
// Sample Output 0

// D
// Explanation 0

// Because score=11, it satisfies the condition 10<score<=15 (which corresponds to D). Thus, we return D as our answer.

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = 'A';
    } else if (score > 20 && score <= 25) {
        grade = 'B';
    }  else if (score > 15 && score <= 20) {
        grade = 'C';
    }  else if (score > 10 && score <= 15) {
        grade = 'D';
    }  else if (score > 5 && score <= 10) {
        grade = 'E';
    }  else if (score > 0 && score <= 5) {
        grade = 'F';
    } 
    return grade;
}

console.log(getGrade(11));