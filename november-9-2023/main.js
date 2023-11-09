//KATA 1 
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
// FUNDAMENTALSARRAYSLISTS

function distinct(a) {
    return [...new Set(a)];
  }


//test cases 
console.log(distinct([1,2,2,3,3,4,4,5,6,7,7,7]), [1,2,3,4,5,6,7]);
console.log(distinct([1,1,1,2,3,4,5]), [1,2,3,4,5]);
console.log(distinct([1,1,2]), [1,2]);