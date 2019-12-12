// 10Days Day 1 factorial

// Wed Dec 11, 2019

'use strict';

function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}