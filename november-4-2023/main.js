//KATA 1 

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let indexOfLowest = numbers.indexOf(Math.min(...numbers))
  let newNums = []
  numbers.forEach((num, i) => {
      if(i != indexOfLowest){
          newNums.push(num)
      }
  })
return newNums
}

//test cases 
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");


////////////////////////////////////////////////////////////////////////////


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  //code here
  let newStr = str.toLowerCase()
  let x = []
  let o = []
  for (let i = 0; i < str.length; i++){
   if(newStr[i] === 'x') {
    x.push(newStr[i])
   }else if (newStr[i] === 'o'){
    o.push(newStr[i])
   }
  }
  return x.length === o.length
}

//test cases
console.log(XO('xo'),true);
console.log(XO('XO'),true);
console.log(XO('xo0'),true);
console.log(XO('xxxoo'),false);
console.log(XO("xxOo"),true);
console.log(XO(''),true,'Empty string` contains equal amount of x and o');
console.log(XO('xxxxxoooxooo'),true);
console.log(XO("xxxm"),false);
console.log(XO("ooom"),false);
console.log(XO("Oo"),false);
console.log(XO('abcdefghijklmnopqrstuvwxyz'),true,'Alphabet contains equal amount of x and o');
console.log(XO("xxxxxxxooo"),false);


////////////////////////////////////////////////////////////////////////////

// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.


function findDup( arr ){
   return arr.filter((x,_,a) => a.indexOf(x) !== a.lastIndexOf(x))[0];
}


//test cases

console.log(findDup([1,2,2,3]), 2)
console.log(findDup([1,3,2,5,4,5,7,6]), 5)