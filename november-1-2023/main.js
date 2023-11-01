//KATA 1

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

const inArray = (array1,array2) => {
    return array1.filter(x => array2.find(x2 => x2.match(x))).sort()
  }

  //test cases
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])
console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["live", "strong"])



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature,n){
    if(n === 0){
      signature = []
    }else if (n === 1){
      signature = [signature[0]]
    }else {
      while (signature.length < n){
      let sum = signature.slice(-3).reduce((acc, c) => acc + c, 0)
      signature.push(sum)
    }
    }
    
    return signature 
  }

//test cases
console.log(tribonacci([1,1,1], 10), [1,1,1,3,5,9,17,31,57,105])
console.log(tribonacci([0,0,1], 10), [0,0,1,1,2,4,7,13,24,44])


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 3

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    return arr.map((e,i) => arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ? '(' : ')').join('')
    }

//test cases
console.log(duplicateEncode("din"),"(((", "Incorrect answer for 'din'")
console.log(duplicateEncode("recede"),"()()()", "Incorrect answer for 'recede'")
console.log(duplicateEncode("Success"),")())())", "Incorrect answer for 'Success' - should ignore case")

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 4

// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!
// SORTINGARRAYS

function myLanguages(results) {
    let sortable = []
    for(const property in results)
    sortable.push([property, results[property]])
    return sortable.sort((a,b) => b[1] - a[1]).filter((e) => e[1] >= 60 ).map(x => x[0])
  }

//test cases
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 5

// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

function tail (array){
    return array.filter((x,i) => i > 0)
  }
  
  function head (array){
    return +array.filter((e,i) => i === 0).join('')
  }
  
  function init(array){
    let lastIndex = array.length - 1
   return array.filter((e,i) => i < lastIndex)
  }
  
  
  function last(array){
    return +array.filter((e,i) => i === array.indexOf(array[array.length - 1])).join('')
  }

  //test cases
  console.log(head([5,1]), 5)
  console.log(tail([1]), [])
  console.log(init([1,5,7,9]), [1,5,7])
  console.log(last([7,2]), 2)

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 6

//   Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let comparedVal = array[0]
    let ascending = array.sort((a,b) => a-b)[0]
    let descending = array.sort((a,b) => b-a)[0]
    if (comparedVal === ascending){
      return 'yes, ascending'
    }else if (comparedVal === descending){
      return 'yes, descending'
    }else {
      return 'no'
    }
  }

//test cases 
console.log(isSortedAndHow([1, 2]), 'yes, ascending')
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending')
console.log(isSortedAndHow([4, 2, 30]), 'no')

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 7

//   Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    //your code here
   let team1 = array.filter((x,i) => !(i % 2)).reduce((acc,c) => acc + c, 0)
   let team2 = array.filter((x,i) => i % 2).reduce((acc,c) => acc + c, 0)
   return [team1, team2]
  }

//test cases
console.log(rowWeights([80]), [80,0])
console.log(rowWeights([29,83,67,53,19,28,96]), [211,164])
console.log(rowWeights([0]), [0,0])
console.log(rowWeights([39,84,74,18,59,72,35,61]), [207,235])

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 8
 
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :) 

function sumOfMinimums(arr) {
    let mins = []
    // your code here
    arr.forEach(x => mins.push(Math.min(...x)))
    return mins.reduce((acc,c) => acc + c, 0)
  }

//test cases
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 9

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Return an array
function fizzbuzz(n)
{
  let fizzbuzz = []
 for (let i = 1; i <= n; i++){
  if(i % 3 === 0 && i % 5 === 0){
    fizzbuzz.push('FizzBuzz')
  }else if (i % 5 === 0){
    fizzbuzz.push('Buzz')
  }else if(i % 3 === 0){
    fizzbuzz.push('Fizz')
  }else {
  fizzbuzz.push(i)
 }
}
return fizzbuzz

}

//test cases
console.log(fizzbuzz(10), [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'])
console.log(fizzbuzz(30), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"])


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 10
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter((x)=>!(x%2));
  }

  //test cases
  console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
  console.log(getEvenNumbers([1,2]), [2])
  console.log(getEvenNumbers([1,3,9]), [])

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 11

//   Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return (String(array)).split(',').filter(x => x).map(x => +x).sort((a,b) => a-b)
  }

  //test cases
  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100])


  