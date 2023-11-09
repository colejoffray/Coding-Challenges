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



//KATA 2 
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
    // TODO
    return string.split(',').length > 2 ? string.split(',').slice(1,-1).join(' ') : null
  }

  //test cases 
  console.log(array('A1,B2,C3,D4,E5'), 'B2 C3 D4');
  console.log(array('A,1,23,456,78,9,Z'), '1 23 456 78 9');