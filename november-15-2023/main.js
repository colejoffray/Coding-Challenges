//KATA 1 6kyu

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


const  countBits = function(n) {
    // Program Me
    const binary = n.toString(2).split('')
    const howMany1s = binary.filter(x => x === '1').length
    return howMany1s
  };

//test cases
console.log(countBits(0), 0)
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(392902058), 17);
console.log(countBits(183337941), 16);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2 6kyu

function findOutlier(integers){
    //your code here
    const evens = integers.filter(x => x % 2 === 0)
    const odds = integers.filter(x => x % 2)
    return evens.length > odds.length ? odds[0] : evens[0]
  }

  //test cases
  console.log(findOutlier([2,6,8,10,3]), 3);
  console.log(findOutlier([0,0,3,0,0]), 3);
  console.log(findOutlier([1,1,0,1,1]), 0);
  console.log(findOutlier([0, 1, 2]), 1);



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 3 6kyu


  // Welcome.

  // In this kata you are required to, given a string, replace every letter with its position in the alphabet.
  
  // If anything in the text isn't a letter, ignore it and don't return it.
  
  // "a" = 1, "b" = 2, etc.
  
  // Example
  // alphabetPosition("The sunset sets at twelve o' clock.")
  // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

  function alphabetPosition(text) {
    return text.split('').map((e)=> parseInt(e, 36) - 9 ).filter(x => +x >= 1).join(' ')
  }

//test cases
  console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
  console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");


  


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// KATA 4 6kyu

//   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


function persistence(num) {
  //code me
  let one = num + ''
  let count = 0
  
    while(one.length > 1){
      one = one.split('').reduce((acc,c) => +acc * +c, 1) + ''
      count++
   }
  
 return count
}


console.log(persistence(999), 4);
console.log(persistence(4),0);
console.log(persistence(25),2);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 5 6kyu

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  let camelCase = str.split(/[.\-_]/)
  const firstWord = camelCase.splice(0,1)
  let otherWords = []

  camelCase.forEach(x => {
    let characters = x.split('')
    characters[0] = characters[0].toUpperCase()
    otherWords.push(characters.join(''))
  }) 

  otherWords = otherWords.join('')
  return firstWord + '' + otherWords
  }

//test cases 

  console.log(toCamelCase("the_stealth_warrior"), 'theStealthWarrior');
  console.log(toCamelCase("I-am-a-programmer"), "IAmAProgrammer");
  console.log(toCamelCase("i-am-a-programmer"), "iAmAProgrammer");
