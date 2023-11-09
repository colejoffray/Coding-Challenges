//KATA 1

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// const evenNumbers = (array, number) => array.filter(x => !(x % 2)).slice(-number)


//test cases 
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 1), [8])
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2
// DESCRIPTION:
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.


function countDevelopers(list) {
    // your awesome code here :)
    const obj = {}
    count = 0
    for (let i = 0; i < list.length; i++){
        obj[i] = list[i]
    }
    for(key in obj) {
        if(obj[key].continent === 'Europe' && obj[key].language === 'JavaScript'){
            count ++
        }
    }
    return count
   ;

  }

  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  //test case
  console.log(countDevelopers(list1), 1)

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 3

//   Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

const divCon = x => x.filter(x => x === +x).reduce((acc,c) => acc + c, 0) - x.filter(x => x === String(x)).map(x => +x).reduce((acc,c) => acc + c, 0)

//test cases
console.log(divCon([9, 3, '7', '3']), 2)
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14)
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13)


  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 4

//   DESCRIPTION:
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.
const toNumberArray = stringarray => stringarray.map(x => +x)

//test cases
console.log(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])
