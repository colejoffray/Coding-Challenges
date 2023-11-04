//KATA 1 

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.


const binaryArrayToNumber = arr => {
  // your code
  return parseInt(arr.join(''), 2)
};

//test cases 

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1)
console.log(binaryArrayToNumber([0,0,1,0]), 2)
console.log(binaryArrayToNumber([1,1,1,1]), 15)


////////////////////////////////////////////////////////////////////////////

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1,array2){
  //...
  let results = []
  array2.forEach(word => {
    array1.forEach(ending => {
      if(word.includes(ending)){
        results.push(ending)

      }
})
  })
    return Array.from(new Set(results)).sort()
  }

console.log(inArray(["arp", "live", "strong"],  ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])