//KATA 1
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b){
    return [...new Set(a.concat(b))].sort((a,b) => a-b)
}

//test cases 
console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);
console.log(mergeArrays([1, 2, 3], []), [1, 2, 3]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2

// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
// #References

// Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture

function hotpo(n){
    let count = 0 
    while (n > 1){
        if(n % 2){
            n = 3 * n + 1
            count ++
        }else {
            n = n / 2
            count ++ 
        }
    }
    return count
}

//refactor 
function hotpo(n){
    let count = 0
    while (n > 1){
        n % 2 ? n=3*n+1 : n= n / 2
        count++
    }
    return count
}

//test cases

console.log(hotpo(23), 15);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);